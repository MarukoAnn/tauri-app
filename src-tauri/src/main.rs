// Prevents additional console window on Windows in release, DO NOT REMOVE!!

#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

use tauri::{SystemTray, CustomMenuItem, SystemTrayMenu};


fn main() {
    let tray_menu = SystemTrayMenu::new(); // 插入菜单项
    let system_tray = SystemTry::new().with_menu(tray_menu);
    let context = tauri::generate_context!();
    tauri::Builder::default()
        .system_tray(system_tray)
        .invoke_handler(tauri::SystemTray::default())
        .run(context)
        .expect("error while running tauri application")
}
