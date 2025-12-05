function Modal({probs}) {
    return (
        <div className="modal">
            <h3>{probs.ptitle}</h3>
            <p>{probs.pday}</p>
            <p>{probs.pcontent}</p>
        </div>
    );
}

export default Modal;