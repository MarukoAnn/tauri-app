// use tauri::Manager
// use tauri::AppHandle

// pub fn listen_events (app: &AppHandle)  {
//     let winHandler = app.get_window('main').unwrap();
//     winHandler.listen("tauri://window/blur", move |_| {
//         println!("缩小事件");
//     })

//     winHandler.listen("tauri://window/close-requested", move |_| {
//         println!("关闭事件");
//     })
//     Ok(())
// }