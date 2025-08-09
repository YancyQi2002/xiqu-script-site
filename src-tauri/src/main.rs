// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
  #[cfg_attr(mobile, tauri::mobile_entry_point)]
  app_lib::run_mobile();

  #[cfg(target_os = "windows")]
  app_lib::run_windows();

  #[cfg(all(not(any(target_os = "android", target_os = "ios")), not(target_os = "windows")))]
  app_lib::run_desktop();
}
