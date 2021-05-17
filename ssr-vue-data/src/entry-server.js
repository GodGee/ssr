import { createApp } from "./main";

//context 后端返回的上下文
export default context => {
  return new Promise((resolve, reject) => {

    const {app} = createApp();

    const router = app.$router;
 
    const { url } = context;
    const { fullPath } = router.resolve(url).route;
    if (fullPath !== url) {
      return reject({ url: fullPath });
    }
    //更改路由
    router.push(url);
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }
      resolve(app);
    }, reject);
  });
};
