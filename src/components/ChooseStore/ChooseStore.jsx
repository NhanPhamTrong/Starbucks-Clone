import "./ChooseStore.scss";

export const ChooseStore = () => {
    return (
        <div id="choose-store">
            <a href="/">
                <div className="mobile">
                    <p>For item availability, choose a store</p>
                    <span><i className="fa-solid fa-angle-down"></i></span>
                </div>
                <div className="desktop">
                    <p>
                        For item availability
                        <br />
                        <span>Choose a store</span>
                    </p>
                    <span><i className="fa-solid fa-angle-down"></i></span>
                </div>
            </a>
            <button type="button">
                <span><i className="fa-solid fa-bag-shopping"></i></span>
            </button>
        </div>
    )
}