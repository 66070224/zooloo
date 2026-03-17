import AquaAnimalCard from "@/components/animal/Aquaanimalcard"
import Navbar from "@/components/navbar/Navbar"

export default function Ocean() {
    const oceanData = [
        {
            id: 3,
            name: "Dolphin",
            detail: "Highly intelligent marine mammals in the family Delphinidae; social and often very playful.",
            imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/049/100/278/small/realistic-dolphin-swimming-gracefully-marine-life-transparent-background-png.png"
        },
        {
            id: 4,
            name: "Octopus",
            detail: "Cephalopod with eight arms, known for intelligence, camouflage and flexible body.",
            imageUrl: "https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-octopus-sealife-animal-png-image_11711694.png"
        },
        {
            id: 5,
            name: "Sea Turtle",
            detail: "Reptiles of the order Testudines adapted for life in the sea; many are migratory and long-lived.",
            imageUrl: "https://www.pngall.com/wp-content/uploads/15/Sea-Turtle-PNG-Free-Image.png"
        },
        {
            id: 6,
            name: "Jellyfish",
            detail: "Soft-bodied, free-swimming aquatic animals with umbrella-shaped bells and trailing tentacles.",
            imageUrl: "https://png.pngtree.com/png-vector/20240124/ourmid/pngtree-jellyfish-in-the-blue-sea-png-image_11487849.png"
        },
        {
            id: 7,
            name: "Seahorse",
            detail: "Small marine fish in the genus Hippocampus; males carry the eggs in a brood pouch.",
            imageUrl: "https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-seahorse-sealife-animal-png-image_11682851.png"
        },
        {
            id: 8,
            name: "Manta Ray",
            detail: "Large rays in the genus Manta; graceful, filter-feeding and with wide wing-like pectoral fins.",
            imageUrl: "https://png.pngtree.com/png-vector/20250624/ourmid/pngtree-manta-ray-isolated-on-a-transparent-background-png-image_16587531.png"
        },
        {
            id: 9,
            name: "Dragon",
            detail: "A dragon is a mythical creature found in the folklore of cultures throughout the world.",
            imageUrl: "https://freepngimg.com/download/temp_webp/9-2-dragon-png-2.webp"
        },
        {
            id: 10,
            name: "Crab",
            detail: "Decapod crustaceans with a thick exoskeleton and a single pair of pincers; many species live inshore.",
            imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/046/710/093/small/crab-isolated-on-transparent-background-png.png"
        },
        {
            id: 11,
            name: "Starfish",
            detail: "Echinoderms with typically five arms (but sometimes more); some can regenerate lost limbs.",
            imageUrl: "https://purepng.com/public/uploads/large/purepng.com-starfishfishseaoceanstarfish-98152464443820ojt.png"
        },
        {
            id: 12,
            name: "Clownfish",
            detail: "Small reef fish (Amphiprioninae) that live among sea anemone tentacles in a mutualistic relationship.",
            imageUrl: "https://static.vecteezy.com/system/resources/previews/058/065/023/non_2x/stunning-closeup-of-an-ocellaris-clownfish-nemo-fish-in-vibrant-orange-and-white-stripes-free-png.png"
        },
        {
            id: 13,
            name: "shark",
            detail: "cartilaginous fish, part of the class Chondrichthyes, that have existed for over 420 million years",
            imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/052/511/193/small/great-white-shark-png.png"
        }, {
            id: 14,
            name: "Whale",
            detail: "Whales are a widely distributed and diverse group of fully aquatic placental marine mammals. As an informal and colloquial grouping",
            imageUrl: "https://www.pngall.com/wp-content/uploads/7/Whale-PNG-Picture.png"
        }
    ];
    return (
        <>
            <Navbar index={0} />
            <div className="min-h-screen bg-gradient-to-r from-[#000b1e] via-[#001a3a] to-[#002a5c]">
                <div className="max-w-6xl mx-auto flex flex-col gap-24 px-6 py-10">
                    {
                        oceanData.map((i) => (
                            i.id % 2 == 0 ? <AquaAnimalCard id={i.id} name={i.name} imageUrl={i.imageUrl} detail={i.detail} direction="flex-row-reverse text-end" key={i.id}/> :
                                <AquaAnimalCard id={i.id} name={i.name} imageUrl={i.imageUrl} detail={i.detail} direction="flex-row" key={i.id}/>
                        ))
                    }

                </div>
            </div>
        </>
    )
}