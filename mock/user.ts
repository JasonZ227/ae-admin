import { Random } from "mockjs";
import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/info",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "请求成功",
        type: "success",
        result: {
          name: "JasonZeng",
          age: 22,
          avatar: "/imgs/zjcat.jpg",
        },
      };
    },
  },
  {
    url: "/api/login",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "请求成功",
        type: "success",
        result: {
          token: Random.string(10),
        },
      };
    },
  },
] as MockMethod[];
