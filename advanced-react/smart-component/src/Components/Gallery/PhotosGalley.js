import React, { memo, useState } from 'react';
import Button from '../Button'


function PhotosGallery() {

    const { photos } = props

    const { gallery, setGallery } = useState(photos)

    const handleRemove = (key) => {
        const newGallery = gallery.filter((img, index) => index !== key)
        setGallery(gallery)
    }

    const renderPhotos = (img, key) => {
        return (
            <div>
                <img src={img} />
                <Button onClick={() => handleRemove(key)}>
                 Remover{key}
                </Button>
            </div>
        )
    }

    return (
        <div>
            {photos.map(renderPhotos)}           
        </div>
    )
}

export default memo(PhotosGallery);