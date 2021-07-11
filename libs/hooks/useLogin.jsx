import React from 'react'

function useFetch(props) {
  const [data,setData]=React.useState(null)
  const [error,setError]=React.useState(null)
  const [loading,setLoading]=React.useState(false)
  React.useEffect(()=>{
      const mainUrl="https://iiuc-campus-recuitement-system.herokuapp.com/user/login"
      fetch(mainUrl+props.url,{
          method:props.method,
          body:JSON.stringify(props.body),
          headers={
              "Content-type":"application/json"

          },
          redirect:'follow'
      })
      .then(res=>res.text)
      .then(data=>setData(data))
      .then(err=>setError(err))
  },[])
    return{data,error}
}

export default useFetch
