use tauri::Manager;

#[tauri::command]
// 加载内容的启动窗口
pub async fn close_splashscreen(window: tauri::Window) {
    // close splashscreen
    if let Some(splashscreen) = window.get_window("splashscreen") {
        splashscreen.close().unwrap();
    }
    // window.get_window("splashscreen").unwrap().close().unwrap();
    // show main window
    // window.get_window("main").unwrap().show().unwrap();
}

#[tauri::command]
pub fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
pub fn close_window(window: tauri::Window) {
    // if window.get_window("login") {
    //     login.close().unwrap();
    // }
    // println!("%s", window.get_window("login"))
    window.get_window("login").unwrap().close().unwrap();
    window.get_window("main").unwrap().show().unwrap();
}