
import Title from "../components/title"
import styles from '../styles/Home.module.css'
export default function Home({data}) {
 
  return (
    <>
    <Title title = "Home"/>
    <h1>Home Page</h1>
    <div className ={styles.container}>

   
    {
      data.map((data, i)=>{
        return(
          <div key = {i}>
            <h3>{data.name}</h3>
            <p>{data.email}</p> <hr />
          </div>
        )
      })
    }
     </div>
    </>
  )
}
export async function getStaticProps(){
  const res =  await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return{
    props:{
      data
    }
  }
}
