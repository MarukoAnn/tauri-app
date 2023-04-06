// Prevents additional console window on Windows in release, DO NOT REMOVE!!

#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod invok;
mod tray;
fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
        .system_tray(tray::menu())
        .invoke_handler(tauri::generate_handler![invok::close_splashscreen, invok::greet, invok::close_window])
        .on_system_tray_event(tray::system_tray_handler)
        .run(context)
        .expect("error while running tauri application")
}
