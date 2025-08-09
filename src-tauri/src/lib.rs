// ===================== 移动端入口 =====================
// 该函数仅在 Android/iOS 平台生效，并作为移动端入口点。
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run_mobile() {
  tauri::Builder::default()
    .setup(|app| {
      // 仅在 debug 模式下启用日志插件，方便开发调试。
      if cfg!(debug_assertions) {
        app.handle().plugin(
          tauri_plugin_log::Builder::default()
            .level(log::LevelFilter::Info)
            .build(),
        )?;
      }
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

// ===================== Windows 桌面端入口 =====================
// 该函数仅在 Windows 平台生效，包含托盘图标、菜单和事件响应。
#[cfg(target_os = "windows")]
pub fn run_windows() {
  use tauri::{Manager, menu::{Menu, MenuItem}, tray::TrayIconBuilder, image::Image};

  tauri::Builder::default()
    .setup(|app| {
      // ===================== 创建托盘菜单项 =====================
      // 创建“退出”菜单项，id 为 quit，显示文本为“退出”
      let quit_i = MenuItem::with_id(app, "quit", "退出", true, None::<&str>)?;
      // 创建“显示”菜单项，id 为 show，显示文本为“显示”
      let show_i = MenuItem::with_id(app, "show", "显示", true, None::<&str>)?;
      // 将菜单项添加到菜单中，顺序为“显示”、“退出”
      let menu = Menu::with_items(app, &[&show_i, &quit_i])?;

      // ===================== 创建托盘图标并绑定菜单和事件 =====================
      let _tray = TrayIconBuilder::new()
        .icon(Image::from_path("icons/icon.ico").expect("icon not found")) // 设置托盘图标路径
        .menu(&menu) // 绑定菜单到托盘
        .on_menu_event(|app, event| { // 监听菜单项点击事件
          match event.id.as_ref() {
            // 点击“显示”菜单项时，显示主窗口
            "show" => {
              if let Some(window) = app.get_webview_window("main") {
                let _ = window.show();
              }
            }
            // 点击“退出”菜单项时，退出应用
            "quit" => {
              println!("quit menu item was clicked");
              app.exit(0);
            }
            // 其他菜单项点击事件
            _ => {
              println!("menu item {:?} not handled", event.id);
            }
          }
        })
        .on_tray_icon_event(|tray, event| match event { // 监听托盘图标事件
          // 当鼠标左键点击并释放托盘图标时
          tauri::tray::TrayIconEvent::Click {
            button: tauri::tray::MouseButton::Left,
            button_state: tauri::tray::MouseButtonState::Up,
            id: _,
            position: _,
            rect: _,
          } => {
            println!("left click pressed and released");
            // 获取 app 句柄
            let app = tray.app_handle();
            // 显示并聚焦主窗口
            if let Some(window) = app.get_webview_window("main") {
              let _ = window.unminimize();
              let _ = window.show();
              let _ = window.set_focus();
            }
          }
          // 其他托盘事件
          _ => {
            println!("unhandled event {event:?}");
          }
        })
        .build(app)?;
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

// ===================== 其他桌面平台入口（如 macOS、Linux） =====================
// 该函数在非移动端且非 Windows 平台生效，作为普通桌面端入口。
#[cfg(all(not(any(target_os = "android", target_os = "ios")), not(target_os = "windows")))]
pub fn run_desktop() {
  tauri::Builder::default()
    .setup(|app| {
      // 仅在 debug 模式下启用日志插件，方便开发调试。
      if cfg!(debug_assertions) {
        app.handle().plugin(
          tauri_plugin_log::Builder::default()
            .level(log::LevelFilter::Info)
            .build(),
        )?;
      }
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
