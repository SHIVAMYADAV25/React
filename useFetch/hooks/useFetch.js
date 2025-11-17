import {useState , useEffect} from "react"

// export function usePostTitle(){
//     const [post,setPost] = useState({});

//   async function getPosts() {
//     // console.log("c")
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const json = await response.json();
//     setPost(json);
//   }

//   useEffect(()=>{
//     getPosts();
//   },[])

//   return post.title;
// }


export function useFetch(url){
    const [finalData,setFinalData] = useState({});
    const [loading,setLoading] = useState(true)

  async function getPosts() {
    setLoading(true);
    let response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
    setLoading(false);
  }

  useEffect(()=>{
    getPosts();
  },[url])

  return {
    finalData,
    loading
  }
}

// useEffect always run at the end of the function