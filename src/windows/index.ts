import {
  WebviewWindow,
  appWindow,
  getAll,
  getCurrent,
} from "@tauri-apps/api/window";
import { relaunch, exit } from "@tauri-apps/api/process";
import { emit, listen } from "@tauri-apps/api/event";
import { setWin } from "./actions";
export const windowConfig = {
//   label: "", // 窗口唯一label
//   title: "", // 窗口标题
//   url: "", // 路由地址
  width: 900, // 窗口宽度
  height: 640, // 窗口高度
//   minWidth: "", // 窗口最小宽度
//   minHeight: "", //窗口最小高度
//   x: "", //
//   y: "", //
  center: true, //
  resizable: true, // 是否支持缩放
  maximized: false, // 最大化窗口
  decorations: false, //窗口是否无边框及导航条
  alwaysOnTop: false, // 置顶窗口
};

class Windows {
  constructor() {
    this.listen();
  }
  // 获取窗口
  getWin(label: string) {
    return WebviewWindow.getByLabel(label);
  }

  // 获取全部窗口
  getAllWin() {
    return getAll();
  }

  // 创建新窗口
  async createWin(options: any) {
    const args = { ...windowConfig, ...options };
    console.log(args, 'args')
    // 判端窗口是否存在
    const existWin: WebviewWindow | undefined = this.getAllWin().find(
      (win: WebviewWindow) => win.label == args.label
    );
    console.log(existWin, 'existWin')
    if (existWin) {
      if (!existWin.label.includes("mian")) {
        await existWin?.unminimize();
        await existWin?.setFocus();
        return;
      }
      await existWin.close();
    }
    // 创建窗口对象
    let win = new WebviewWindow(args.label, args);

    // 是否最大化
    if (args.maximize && args.resizable) {
      win.maximize();
    }

    // 创建窗口完毕/ 失败
    win.once("tauri://created", async () => {
      console.log("window create success");
    });

    win.once("tauri://error", async (err) => {
      console.log("window create error", err);
    });
  }

  async listen() {
    // 创建新窗体
    await listen("win-create", async (event: any) => {
      console.log("event", event);
       await this.createWin(event?.payload);
    });

    // 显示窗体
    await listen("win-show", async () => {
      if (!appWindow.label.includes("main")) return;
      await appWindow.show();
      await appWindow.unmaximize();
      await appWindow.setFocus();
    });

    // 隐藏窗体
    await listen("win-hide", async () => {
      if (!appWindow.label.includes("main")) return;
      await appWindow.hide();
    });

    // 退出
    await listen("win-exit", async () => {
      setWin("logout");
      await exit();
    });
    // 重启应用
    await listen("win-relaunch", async () => {
      await relaunch();
    });

    // 主/渲染进程传参
    await listen("win-setdata", async (event: any) => {
      await emit("win-postdata", JSON.parse(event.payload));
    });
  }
}
export default Windows;