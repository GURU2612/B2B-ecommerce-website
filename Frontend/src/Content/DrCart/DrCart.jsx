import './DrCart.css';

function DrCart({ name, title, image }) {
    return (
        <div className="advisor-section-card">
            <img src={image} alt={name} className="advisor-section-doctor-img" />
            <div className="advisor-section-card-info">
                <h3>{name}</h3>
                <p className="advisor-section-title">{title}</p>
            </div>
        </div>
    );
}

export default DrCart;
