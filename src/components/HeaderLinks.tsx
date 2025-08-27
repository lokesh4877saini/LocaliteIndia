"use client"
import Link from 'next/link';
import { Search, User, Heart, ShoppingCart } from 'lucide-react';
const HeaderLinks = () => {
    return (<>
        <Link  href='/' className="text-2xl font-bold cursor-pointer">Localite India</Link>

        <div className="flex-grow mx-6 max-w-lg">
            {/* You can add a search bar or other content here */}
        </div>
        <ul className="flex space-x-6 items-center text-lg cursor-pointer">
    <li title="Search" className="hover:opacity-70">
        <Link href="/search">
            <Search size={24} />
        </Link>
    </li>
    <li title="Account" className="hover:opacity-70">
        <Link href="/auth">
            <User size={24} />
        </Link>
    </li>
    <li title="Wishlist" className="hover:opacity-70">
        <Link href="/wish">
            <Heart size={24} />
        </Link>
    </li>
    <li title="Cart" className="hover:opacity-70">
        <Link href="/cart">
            <ShoppingCart size={24} />
        </Link>
    </li>
</ul>


    </>)
}
export default HeaderLinks;