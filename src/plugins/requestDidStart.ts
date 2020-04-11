/** ApolloサーバーがQraphQLリクエストの実行を開始するたびに発生するイベント */
export const requestDidStart = ({request}: {request: any}) => {
  console.info(request.query);
};
