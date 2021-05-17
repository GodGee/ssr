import { createApp } from "./main";

//context 后端返回的上下文
export default context => {
  return new Promise((resolve, reject) => {
    const { app } = createApp();

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
      //遍历路由下所有组件，如果有需要服务端渲染的请求，则请求
      Promise.all(
        matchedComponents.map(component => {
          // 未来各组件中如果有serverRequest对象，判断是否需要服务请求数据，并传入一个store参数，服务端数据共享给前端
          if (component.serverRequest){
            return component.serverRequest(app.$store);
          }
        })
      ).then(()=>{
        //存储状态
        context.state = app.$store.state
        resolve(app)
      }).catch(reject);
    }, reject);
  });
};
