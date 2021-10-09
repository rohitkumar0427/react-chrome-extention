import styles from "./bookmark.module.css"
import Button from "@mui/material/Button";
import { useState,useEffect } from "react";
import {GetData,SetData} from "../../Utils/localStorage"


function Bookmark(){
    const [link,setLink]=useState("")
    const [en,setEn]=useState([])
    const [shop,setShop]=useState([])
    const [study,setStudy]=useState([])
    const [bus,setBus]=useState([])



    const handleEnt=()=>{
      


      let dr=GetData("en")
      let st="";
      let a
      if(link[8]==="w" && link[9]==="w" && link[10]==="w"){
          a=12
      }else{
          a=8
      }
      console.log(link[7])
      console.log(link[8])
      console.log(link[9])
      console.log(link[10])
      console.log(a)
      for(let i=a;i<link.length;i++){
          if(link[i]==="."){
              break;
          }
          else{
              console.log(link[i])
              st+=link[i]
          }
      }
    let ob={
        alink:link,
        st:st
    }
      SetData("en",[...dr,ob]);
       let r=GetData("en")
       setEn(r)
       setLink("")
       console.log(en)



    }
    const handleShop=()=>{
   



       let dr=GetData("shop")
       let st=""
       let a;
       if(link[9]==="w" && link[10]==="w" && link[11]==="w"){
           a=12
       }else{
           a=8;
       }
      
       for(let i=a;i<link.length;i++){
           if(link[i]==="."){
               break;
           }
           else{
               console.log(link[i])
               st+=link[i]
           }
       }
       let ob={
        alink:link,
        st:st
    }
 
       SetData("shop",[...dr,ob]);
       let r=GetData("shop")
       setShop(r)
       setLink("")
       


    }
    const handleStudy=()=>{
       


       let dr=GetData("study")
       let st=""
       let a
       if(link[9]==="w" && link[10]==="w" && link[11]==="w"){
           a=12
       }else{
        a=8
       }
       for(let i=a;i<link.length;i++){
           if(link[i]==="."){
               break;
           }
           else{
               console.log(link[i])
               st+=link[i]
           }
       }
       let ob={
        alink:link,
        st:st
    }
 
       SetData("study",[...dr,ob]);
       let r=GetData("study")
       setStudy(r)
       setLink("")
    


    }

    const handleBus=()=>{
     


        let dr=GetData("bus")
        let st=""
        let a;
        if(link[9]==="w" && link[10]==="w" && link[11]==="w"){
            a=12
        }else{
            a=8;
        }
        for(let i=a;i<link.length;i++){
            if(link[i]==="."){
                break;
            }
            else{
                console.log(link[i])
                st+=link[i]
            }
        }
        let ob={
            alink:link,
            st:st
        }
    
        SetData("bus",[...dr,ob]);
       let r=GetData("bus")
       setBus(r)
       setLink("")
       
    }

    useEffect(() => {
      
      
     
      
        let dr=GetData("en")
       
        
        if(dr===null){
            SetData("en",[])
        }
        dr=GetData("en")
        setEn(dr)

        let dr1=GetData("shop")
        if(dr1===null){
            SetData("shop",[])
        }
        dr1=GetData("shop")
        setShop(dr1)
        let dr2=GetData("study")
        if(dr2===null){
            SetData("study",[])
        }
        dr2=GetData("study")
        setStudy(dr2)
        
        let dr3=GetData("bus")
        if(dr3===null){
            SetData("bus",[])
        }
        dr3=GetData("bus")
        setBus(dr3)

    }, [])


  return <>
     <div className={styles.mainDiv}>
         <div className={styles.inputDiv}>
             <div className={styles.inputFirst}>
             <h3 className={styles.head}>Paste your address below</h3>
             <input type="text" className={styles.input} onChange={(e)=>setLink(e.target.value)} value={link}/>
             </div>
             <div className={styles.inputsecond}>
             <h3 className={styles.head}>Select type</h3>
             
             <Button variant="outlined"  onClick={handleEnt}>Entertainment</Button>
             <Button variant="outlined" onClick={handleShop}>Shopping</Button>
             <Button variant="outlined"  onClick={handleStudy}>Study</Button>
             <Button variant="outlined"  onClick={handleBus}>Business</Button>
             </div>
         </div>


         <div className={styles.dataDiv}>
         <h2 className={styles.head1}>ENTERTINMENT</h2>
             <div className={styles.heading}>
                
             { en.map((e)=>{return <div className={styles.data}><a href={`${e.alink}`} style={{textDecoration:"none",color:"#fff",fontWeight:"400"}}>{e.st}</a></div>})

            }
            </div>

           <h2 className={styles.head1}>SHOPPING</h2> 
           <div className={styles.heading}>
                
                { shop.map((e)=>{return <div className={styles.data}><a href={`${e.alink}`} style={{textDecoration:"none",color:"#fff",fontWeight:"400"}}>{e.st}</a></div>})
   
               }
               </div>
               <h2 className={styles.head1}>BUSINESS</h2> 
           <div className={styles.heading}>
                
                { bus.map((e)=>{return <div className={styles.data}><a href={`${e.alink}`} style={{textDecoration:"none",color:"#fff",fontWeight:"400"}}>{e.st}</a></div>})
   
               }
               </div>
               <h2 className={styles.head1}>STUDY</h2> 
           <div className={styles.heading}>
                
                { study.map((e)=>{return <div className={styles.data}><a href={`${e.alink}`} style={{textDecoration:"none",color:"#fff",fontWeight:"400"}}>{e.st}</a></div>})
   
               }
               </div>

   


         </div>




     </div>


  
  
  
  
  
  </>


}

export default Bookmark


/*
  
         <div className={styles.dataDiv}>
         <h2>Entertinment</h2>
             <div className={styles.heading}>
                
             { en.map((e)=>{return <div className={styles.data}><a href={`${e.alink}`} style={{textDecoration:"none",color:"black"}}>{e.st}</a></div>})

            }
            </div>

           <h2>Shopping</h2> 
           <div className={styles.heading}>
                
                { shop.map((e)=>{return <div className={styles.data}><a href={`${e.alink}`} style={{textDecoration:"none",color:"black"}}>{e.st}</a></div>})
   
               }
               </div>
               <h2>Business</h2> 
           <div className={styles.heading}>
                
                { bus.map((e)=>{return <div className={styles.data}><a href={`${e.alink}`} style={{textDecoration:"none",color:"black"}}>{e.st}</a></div>})
   
               }
               </div>
               <h2>Study</h2> 
           <div className={styles.heading}>
                
                { study.map((e)=>{return <div className={styles.data}><a href={`${e.alink}`} style={{textDecoration:"none",color:"black"}}>{e.st}</a></div>})
   
               }
               </div>

   


         </div>



*/