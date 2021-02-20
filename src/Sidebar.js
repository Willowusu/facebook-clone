import React from 'react'
import './SidebarRow.css'
import SidebarRow from './SidebarRow'
import userEvent from '@testing-library/user-event'
import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, Storefront, VideoLibrary } from '@material-ui/icons'
import {useStateValue} from "./StateProvider"

function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlags} title="Friends" />
            <SidebarRow Icon={Chat} title="Messenger" />
            <SidebarRow Icon={Storefront} title="Marketplace" />
            <SidebarRow Icon={VideoLibrary} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
        </div>
    )
}

export default Sidebar
