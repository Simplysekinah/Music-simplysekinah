import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { IoIosFastforward } from "react-icons/io";
import { FaBackward } from "react-icons/fa";

const Play = () => {
    const [musicList, setMusicList] = useState([]);
    const [disablePrevious, setDisablePrevious] = useState(false);
    const [disableNext, setDisableNext] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://robo-music-api.onrender.com/music/my-api/${id}`)
            .then((response) => {
                console.log('single music:', response);
                setMusicList(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    useEffect(() => {
        // Disable previous button if id is 1
        setDisablePrevious(parseInt(id, 10) === 1);

        // Disable next button if it's the last element in the musicList
        setDisableNext(parseInt(id, 10) === musicList.length - 1);
    }, [id, musicList]);

    const previous = () => {
        if (id > 1) {
            const previousId = parseInt(id, 10) - 1;
            navigate(`/play/${previousId}`);
        }
    };

    const forward = () => {
        if (id >= 1) {
            const nextId = parseInt(id, 10) +1;
            navigate(`/play/${nextId}`);
        }
    };

    return (
        <>
            <div className='play'>
                <div className='plays'>
                    {musicList.map((element, index) => (
                        <div className='' key={index}>
                            <div className='songpicture'>
                                <img className='songpicture' src={element.songImage} alt="" />
                            </div>
                            <div className='d-flex align-items-center justify-content-center fs-3'>{element.songTitle}</div>
                            <p className='d-flex align-items-center justify-content-center fs-5'>{element.artistName}</p>
                            <div className='d-flex align-items-center justify-content-center'>
                                <audio src={element.songUrl} controls></audio>
                            </div>
                            
                            <div className='flex'>
                                <button
                                    disabled={disablePrevious}
                                    onClick={previous}
                                >
                                    <FaBackward />
                                </button>
                                <button disabled={disableNext} onClick={forward}>
                                <IoIosFastforward />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Play;
