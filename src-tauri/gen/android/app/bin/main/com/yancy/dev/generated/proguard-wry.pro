# THIS FILE IS AUTO-GENERATED. DO NOT MODIFY!!

# Copyright 2020-2023 Tauri Programme within The Commons Conservancy
# SPDX-License-Identifier: Apache-2.0
# SPDX-License-Identifier: MIT

-keep class com.yancy.dev.* {
  native <methods>;
}

-keep class com.yancy.dev.WryActivity {
  public <init>(...);

  void setWebView(com.yancy.dev.RustWebView);
  java.lang.Class getAppClass(...);
  java.lang.String getVersion();
}

-keep class com.yancy.dev.Ipc {
  public <init>(...);

  @android.webkit.JavascriptInterface public <methods>;
}

-keep class com.yancy.dev.RustWebView {
  public <init>(...);

  void loadUrlMainThread(...);
  void loadHTMLMainThread(...);
  void evalScript(...);
}

-keep class com.yancy.dev.RustWebChromeClient,com.yancy.dev.RustWebViewClient {
  public <init>(...);
}
