import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Profile() {
    return (
        <>
            <div id="profile" className="flex items-center h-svh bg-custom-black">
                <div className="flex flex-col items-center h-svh w-full">

                    <div className="flex flex-col items-center justify-center w-1/2 h-1/2">
                        <div className="flex w-4/5 relative justify-center">
                            <div 
                                style = {{ backgroundImage: `url(/profilephoto.jpg)`}}
                                className="profile-photo h-96 w-96 rounded-full bg-cover bg-center"> 

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-5/6 h-3/4 items-center">
                        <div className="flex text-white h-1/4 items-center justify-center">
                            <FontAwesomeIcon icon={faInstagram} className="size-8 mr-5 color: to-blue-100" />
                            <FontAwesomeIcon icon={faGithub} className="size-8 mr-5" />
                            <FontAwesomeIcon icon={faLinkedin} className="size-8" />
                        </div>
                        <div className="flex text-white h-1/2 w-3/4 justify-center">
                            <p className="text-2xl text-center">
                                Hi beautiful people! I am Andrew Liu, a junior at Boston University studying computer science! 
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
