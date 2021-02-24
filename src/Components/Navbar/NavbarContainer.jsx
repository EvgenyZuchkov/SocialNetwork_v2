import StoreContext from "../../StoreContext";
import Navbar from "./Navbar";


const NavbarContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().sidebarPage
                return <Navbar state={state}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default NavbarContainer;