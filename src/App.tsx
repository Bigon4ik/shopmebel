import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Thing from './components/Thing/Thing';
import Cotegories from './components/Cotegories/Cotegories';
import ShowFullItem from './components/ShowFullItem/ShowFullItem';




// @ts-ignore
function App() {


    // @ts-ignore
    const [things,setThings] = useState<any>([
        {
            id:1,
            title:"Chair gray",
            img:'chair-grey.jpeg',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
            category:'chairs',
            price:'49.99'
        },
        {
            id:2,
            title:"Desk",
            img:'table.webp',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
            category:'tables',
            price:'149.00'
        },
        {
            id:3,
            title:"Sofa",
            img:'sofa.jpeg',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
            category:'sofas',
            price:'549.00'
        },
        {
            id:4,
            title:"Lamp",
            img:'wall-light.jpeg',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
            category:'light',
            price:'25.00'
        },
        {
            id:5,
            title:"Chair white",
            img:'chair-white.jpeg',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
            category:'chairs',
            price:'69.99'
        },{
            id:6,
            title:"Sofa-ultra",
            img:'sofa6.jpeg',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
            category:'sofas',
            price:'449.00'
        },{
            id:7,
            title:"Sofa-prince",
            img:'miagkaia-mebel-kriterii-vybora.jpeg',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
            category:'sofas',
            price:'749.00'
        }, {
            id:8,
            title:"Sofa-magic",
            img:'myagkaya_mebel_01.jpeg',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
            category:'sofas',
            price:'719.00'
        },{
            id:9,
            title:"Sofa-lux",
            img:'divan-1.jpeg',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
            category:'sofas',
            price:'399.00'
        }, {
            id:10,
            title:"Desk",
            img:'desk2.jpeg',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
            category:'tables',
            price:'179.00'
        },
        {
            id:11,
            title:"Desk",
            img:'desk3.jpeg',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
            category:'tables',
            price:'199.00'
        }, {
            id:12,
            title:"Desk",
            img:'desk6.jpeg',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
            category:'tables',
            price:'109.00'
        }, {
            id:13,
            title:"Desk",
            img:'desk4.webp',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
            category:'tables',
            price:'179.00'
        },{
            id:14,
            title:"Desk",
            img:'desk5.webp',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
            category:'tables',
            price:'299.00'
        },{
            id:15,
            title:"Chair",
            img:'chair1.jpg',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
            category:'chairs',
            price:'59.99'
        },{
            id:16,
            title:"Chair",
            img:'chair2.jpeg',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
            category:'chairs',
            price:'79.99'
        },{
            id:17,
            title:"Chair",
            img:'chair8.jpeg',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
            category:'chairs',
            price:'89.99'
        },{
            id:18,
            title:"Chair",
            img:'chair3.webp',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
            category:'chairs',
            price:'69.99'
        },{
            id:19,
            title:"Chair",
            img:'chair6.jpeg',
            desc:'Lorem ipsum dolor sit amet, consectetur adipisicing ',
            category:'chairs',
            price:'89.99'
        },
    ])
    const [filteredThings,setFilteredThings] = useState<any>(things)
    const [cartItem,setCartItem] = useState<any>([])
    const [cartSumma,setCartSumma] = useState(0)
    const [showFullItem,setShowFullItem] = useState(false)
    const [fullItem,setFullItem] = useState([])

    const addItemToCart = (item:any) => {
        let isArray = false
      cartItem.forEach((el:any)=>{
          if(el.id === item.id)
              isArray = true
      })
        if(!isArray){
            setCartItem([...cartItem,item])
            setCartSumma(cartSumma+Number.parseFloat(item.price))
        }

    }
    const deleteItemFromCart = (id:any,price:any) => {
        setCartItem(cartItem.filter((el:any) => el.id != id))
        setCartSumma(cartSumma-Number.parseFloat(price))
    }
    const chooseCotegories = (key:any) =>{
        {key!='all' ?
            setFilteredThings(things.filter((el: any) => (
                el.category === key
            ))) : setFilteredThings(things)
        }

    }

    const onShowItem = (item:any)=>{
        setFullItem(item)
        console.log(item)
        // @ts-ignore
        console.log(fullItem.title)
        setShowFullItem(!showFullItem)
    }


  return (
    <div className="wrapper">
      <Header cartItem={cartItem}
              cartSumma={cartSumma}
              deleteItemFromCart={deleteItemFromCart} />
              <Cotegories chooseCotegories={chooseCotegories}/>
      <div className="main">
          {filteredThings.map((t:any) => (
              <Thing key={t.id}
                     title={t.title}
                     img={t.img}
                     id={t.id}
                     desc={t.desc}
                     category={t.category}
                     price={t.price}
                     onShowItem={onShowItem}
                     addItemToCart={addItemToCart}
              />
          ))}
          {/*<Thing things={things}/>*/}

      </div>
        {showFullItem && <ShowFullItem addItemToCart={addItemToCart}
                                       setShowFullItem={setShowFullItem}
                                       fullItem={fullItem}/>}

      <Footer/>


    </div>
  );
}

export default App;
