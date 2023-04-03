// Prevents additional console window on Windows in release, DO NOT REMOVE!!

#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

mod tray;

fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
        .system_tray(tray::menu())
        .invoke_handler(tauri::generate_handler![greet])
        .on_system_tray_event(tray::system_tray_handler)
        .run(context)
        .expect("error while running tauri application")
}
