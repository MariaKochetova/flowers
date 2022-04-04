

export const Flower = ({name, text, price, src}) => {
    return (
        <div style={{
            border: "1px solid hsla(0, 0%, 94%, 0.941)",
            borderRadius: "16px",
            padding: "16px"
        }} className="flower col-md-4">
            <img style={{
                width: "100%",
                height: "calc(width=100%)",
                borderRadius: "16px",
            }} src={src} alt="flower" className="flower-img"/>
            <h5 style={{marginTop: "16px", fontSize: "24px", fontFamily: "Playfair Display"}}>{name}</h5>
            <p style={{marginTop: "4px", fontSize: "16px", fontFamily: "Raleway", fontWeight: 400}}>{text}</p>
            <h6 style={{marginTop: "24px"}} className="price">$ {price}</h6>
            <button style={{
                background: "linear-gradient(#2533cc, #110ecc)",
                border: "3px solid rgba(255, 255, 255, 0.2)",
                padding: "8px 16px",
                fontSize: 16,
            }} className="btn btn-success">Add to card</button>
        </div>
    )
}

export default Flower;