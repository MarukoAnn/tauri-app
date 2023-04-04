use tauri::Manager;
use tauri::{
    AppHandle, CustomMenuItem, SystemTray, SystemTrayEvent, SystemTrayMenu, SystemTrayMenuItem,
};
use tauri::api::process::restart;

use tauri::Icon;
// -> 后面指定类型
// 缩小菜单
pub fn menu() -> SystemTray {
    // 双冒号指访问结构体的函数
    let quit = CustomMenuItem::new("quit".to_string(), "退出");
    let relaunch = CustomMenuItem::new("relaunch".to_string(), "重启应用");
    let hide = CustomMenuItem::new("hide".to_string(), "隐藏窗口");
    let show = CustomMenuItem::new("show".to_string(), "显示窗口");
    let change_icon = CustomMenuItem::new("change_icon".to_string(), "更换托盘图标");
    let tray_menu = SystemTrayMenu::new()
        .add_item(change_icon)
        .add_native_item(SystemTrayMenuItem::Separator) // 分割线
        .add_item(hide)
        .add_item(show)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(quit)
        .add_item(relaunch);
    // .add_
    // 设置在右键点击系统托盘时显示菜单
    return SystemTray::new().with_menu(tray_menu);
}

// 菜单事件

pub fn system_tray_handler(app: &AppHandle, event: SystemTrayEvent) {
    // 获取应用窗口
    let window = app.get_window("main").unwrap();
    // let parent_window = Some(&window);

    match event {
        SystemTrayEvent::LeftClick {
            tray_id: _,
            position: _,
            size: _,
            ..
        } => {
            println!("system tray received a left click");
        }
        SystemTrayEvent::RightClick {
            tray_id: _,
            position: _,
            size: _,
            ..
        } => {
            println!("system tray received a right click");
        }
        SystemTrayEvent::DoubleClick {
            tray_id: _,
            position: _,
            size: _,
            ..
        } => {
            println!("system tray received a double click");
            window.show().unwrap();
        }
        SystemTrayEvent::MenuItemClick { id, .. } => match id.as_str() {
            "quit" => {
                std::process::exit(0);
            }
            "hide" => {
                window.hide().unwrap();
            }
            "show" => {
                window.show().unwrap();
            }
            "relaunch" => {
                print!("重启");
                restart(&app.env());
            }
            "change_icon" => {
                print!("更改图标");
                let new_icon = Icon::Raw(include_bytes!("../icons/2.png").to_vec());
                app.tray_handle().set_icon(new_icon).unwrap();
            }
            _ => {}
        },
        _ => {}
    }
}