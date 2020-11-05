const GetComments = async (commentsUrl) => {
    const commentsRequest = await fetch(postcommentsUrlsUrl)
    return commentsRequest;
  };
  
  export default GetComments;