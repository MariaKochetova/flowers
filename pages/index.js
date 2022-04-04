import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Flower from './flower'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Header } from '../components/Header'

const flowers = [
  {
    "id": 1,
    "name" : "flower1",
    "text" : "text here",
    "price" : "10",
    "src" : "../img/img1.png"
  },
  {
    "id": 2,
    "name" : "flower1",
    "text" : "text here",
    "price" : "10",
    "src" : "../img/img1.png"
  },
  {
    "id": 3,
    "name" : "flower1",
    "text" : "text here",
    "price" : "10",
    "src" : "../img/img1.png"
  },
  {
    "id": 4,
    "name" : "flower1",
    "text" : "text here",
    "price" : "10",
    "src" : "../img/img1.png"
  },
]

export default function Home() {
  return (
    <div>
      <Header></Header>
      <main>
        <div className="container">
            <div style={{
              height: "220px",
              backgroundColor: "aliceblue",
              border: "1px solid hsla(0, 0%, 94%, 0.941)",
              borderRadius: "16px",
          
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }} className="banner">
              <p>Banner text here</p>
            </div>
            <div className='row'>
              {flowers.map((flower) => <Flower key={flower.id} className="col-4" name={flower.name} text={flower.text}
                          price={flower.price} src={flower.src}/>)}
            </div>
        </div>
      </main>
      <footer className="container py-5">
        <div className="row">
            <div className="col-6">Maria Kochetova</div>
            <div style={{textAlign: "right"}} className="col-6">BMSTU</div>
        </div>
      </footer>
    </div>
  )
}
