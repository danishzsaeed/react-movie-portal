import { MdLocalMovies,MdMovieFilter, MdOutlineDesktopWindows, MdOutlineTheaterComedy, MdFamilyRestroom } from 'react-icons/md';
import { GiPunchBlast, GiHeavyTimer, GiPistolGun, GiDualityMask, GiSandsOfTime, GiDrippingKnife, GiWesternHat, GiMaterialsScience } from 'react-icons/gi';
import { SiSkyliner } from 'react-icons/si';
import { BsCameraReels, BsMusicNoteBeamed, BsHeart } from 'react-icons/bs';
import { FaFantasyFlightGames, FaTheaterMasks, FaFighterJet } from 'react-icons/fa';
import { BiMovie } from 'react-icons/bi';
import { RiAliensLine } from 'react-icons/ri';



 const links = [
    {
        title: 'Categories',
        links: [
            {
                name: 'Popular',
                type: 'Categories',
                href: 'popular',
                icon: <MdLocalMovies />
            },
            {
                name: 'Top Rated',
                type: 'Categories',
                href: 'top_rated',
                icon: <MdMovieFilter />
            },
            {
                name: 'Upcoming',
                type: 'Categories',
                href: 'upcoming',
                icon: <MdOutlineDesktopWindows />
            },
        ]
    },
    {
        title: 'Genres',
        links: [
            {
                name: 'Action',
                type: 'Genres',
                href: '28',
                icon: <GiPunchBlast />
            },
            {
                name: 'Adventure',
                type: 'Genres',
                href: '12',
                icon: <GiHeavyTimer />
            },
            {
                name: 'Animation',
                type: 'Genres',
                href: '16',
                icon: <SiSkyliner />
            },
            {
                name: 'Comedy',
                type: 'Genres',
                href: '35',
                icon: <MdOutlineTheaterComedy />
            },
            {
                name: 'Crime',
                type: 'Genres',
                href: '80',
                icon: <GiPistolGun />
            },
            {
                name: 'Documentary',
                type: 'Genres',
                href: '99',
                icon: <BsCameraReels />
            },
            {
                name: 'Drama',
                type: 'Genres',
                href: '18',
                icon: <GiDualityMask />
            },
            {
                name: 'Family',
                type: 'Genres',
                href: '10751',
                icon: <MdFamilyRestroom />
            },
            {
                name: 'Fantasy',
                type: 'Genres',
                href: '14',
                icon: <FaFantasyFlightGames />
            },
            {
                name: 'History',
                href: '36',
                icon: <GiSandsOfTime />
            },
            {
                name: 'Horror',
                href: '27',
                icon: <GiDrippingKnife />
            },
            {
                name: 'Music',
                href: '10402',
                icon: <BsMusicNoteBeamed />
            },
            {
                name: 'Mystery',
                href: '9648',
                icon: <FaTheaterMasks />
            },
            {
                name: 'Romance',
                href: '10749',
                icon: <BsHeart />
            },
            {
                name: 'Science Fiction',
                href: '878',
                icon: <GiMaterialsScience />
            },
            {
                name: 'TV Movie',
                href: '10770',
                icon: <BiMovie />
            },
            {
                name: 'Thriller',
                href: '53',
                icon: <RiAliensLine />
            },
            {
                name: 'War',
                href: '10752',
                icon: <FaFighterJet />
            },
            {
                name: 'Western',
                href: '37',
                icon: <GiWesternHat />
            },
        ]
    },
]

export default links