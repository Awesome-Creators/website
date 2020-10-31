/// <reference path="./shim.d.ts" />
import type { App } from "@vue/runtime-core";
import UseBrowserTabChangeDemo from "../components/UseBrowserTabChangeDemo.vue";

export default function (app: App) {
  app.component("UseBrowserTabChangeDemo", UseBrowserTabChangeDemo);
}
