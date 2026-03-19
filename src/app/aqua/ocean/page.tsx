import AquaAnimalCard from "@/components/animal/Aquaanimalcard"
import Navbar from "@/components/navbar/Navbar"

export default function Ocean() {
    const oceanData = [
        {
            id: 3,
            name: "Dolphin",
            detail: "Highly intelligent marine mammals; social and often very playful.",
            imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/049/100/278/small/realistic-dolphin-swimming-gracefully-marine-life-transparent-background-png.png",
            behavioral: "Social, uses echolocation, known for surfing bow waves.",
            habitat: "Temperate and tropical oceans worldwide.",
            food: "Fish and squids.",
            category: "Mammal",
            nickname: "The Genius of the Ocean",
            temperament: "Friendly / Social (รักสงบและเป็นมิตร)",
            youtube_id: "nKpdl8E8edk",
            statistics: [{ speed: "35 km/h", size: "2-4 m", weight: "150-650 kg", lifespan: "40-50 years" }]
        },
        {
            id: 4,
            name: "Octopus",
            detail: "Cephalopod with eight arms, known for intelligence and camouflage.",
            imageUrl: "https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-octopus-sealife-animal-png-image_11711694.png",
            behavioral: "Solitary, masters of disguise, highly problem-solving.",
            habitat: "Coral reefs and rocky shores.",
            food: "Crabs and lobsters.",
            category: "Mollusk",
            nickname: "The Escape Artist",
            youtube_id: "oSyEZAm8nb8",
            temperament: "Solitary / Shy (รักสันโดษและขี้อาย)",
            statistics: [{ speed: "40 km/h", size: "30-90 cm", weight: "3-10 kg", lifespan: "1-2 years" }]
        },
        {
            id: 5,
            name: "Sea Turtle",
            detail: "Reptiles adapted for life in the sea; many are migratory.",
            imageUrl: "https://www.pngall.com/wp-content/uploads/15/Sea-Turtle-PNG-Free-Image.png",
            behavioral: "Long-distance migratory, returns to birth beach to nest.",
            habitat: "Seagrass beds and coral reefs.",
            food: "Seagrass and algae.",
            category: "Reptile",
            nickname: "None",
            youtube_id: "5Rmv3nliwCs",
            temperament: "Peaceful (รักสงบมาก)",
            statistics: [{ speed: "35 km/h", size: "80-120 cm", weight: "65-190 kg", lifespan: "80+ years" }]
        },
        {
            id: 6,
            name: "Jellyfish (Moon Jelly)",
            detail: "Soft-bodied animals with umbrella-shaped bells.",
            imageUrl: "https://png.pngtree.com/png-vector/20240124/ourmid/pngtree-jellyfish-in-the-blue-sea-png-image_11487849.png",
            behavioral: "Drifts with currents, uses tentacles to sting prey.",
            habitat: "Coastal waters globally.",
            food: "Plankton and larvae.",
            category: "Cnidaria",
            nickname: "Sea Jelly",
            youtube_id: "9z8ujpPgUjI",
            temperament: "Passive (เฉื่อยชา/ไม่มีปฏิกิริยา)",
            statistics: [{ speed: "8 km/h", size: "25-40 cm", weight: "None", lifespan: "6-12 months" }]
        },
        {
            id: 7,
            name: "Seahorse",
            detail: "Small marine fish; males carry eggs in a brood pouch.",
            imageUrl: "https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-seahorse-sealife-animal-png-image_11682851.png",
            behavioral: "Monogamous, uses prehensile tail to anchor.",
            habitat: "Seagrass beds and mangroves.",
            food: "Small crustaceans.",
            category: "Fish",
            nickname: "None",
            youtube_id: "CqgKmN0YhKs",
            temperament: "Timid (ขี้กลัว/รักสงบ)",
            statistics: [{ speed: "1.5 m/h", size: "1.5-35 cm", weight: "200 g", lifespan: "1-5 years" }]
        },
        {
            id: 8,
            name: "Manta Ray",
            detail: "Large rays; graceful, filter-feeding with wing-like fins.",
            imageUrl: "https://png.pngtree.com/png-vector/20250624/ourmid/pngtree-manta-ray-isolated-on-a-transparent-background-png-image_16587531.png",
            behavioral: "Filter feeders, known for breaching out of water.",
            habitat: "Tropical oceans near reefs.",
            food: "Zooplankton.",
            category: "Fish (Cartilaginous)",
            nickname: "Gentle Devil",
            youtube_id: "yfgJx-ShRGI",
            temperament: "Gentle Giant (ยักษ์ใหญ่ใจดี/รักสงบ)",
            statistics: [{ speed: "24 km/h", size: "7 m width", weight: "1,350 kg", lifespan: "40 years" }]
        },
        {
            id: 9,
            name: "Dugong",
            detail: "A large marine mammal which, together with the manatees, is one of four living species of the order Sirenia.",
            imageUrl: "https://png.pngtree.com/png-vector/20240720/ourmid/pngtree-examining-the-graceful-dugong-in-detail-isolated-on-transparent-background-png-image_13161035.png",
            behavioral: "Slow-moving, spends most of its time grazing on seagrass, can hold its breath for up to 6 minutes.",
            habitat: "Warm coastal waters from East Africa to Australia, including the Andaman Sea in Thailand.",
            food: "Seagrass (strictly herbivorous).",
            category: "Mammal",
            nickname: "Sea Cow (หมูน้ำ)",
            youtube_id: "YProaycNpHE",
            temperament: "Very Peaceful / Shy (รักสงบและขี้อายมาก)",
            statistics: [{
                speed: "10-12 km/h",
                size: "2.4-3 meters",
                weight: "230-400 kg",
                lifespan: "70 years"
            }]
        },
        {
            id: 10,
            name: "Crab",
            detail: "Crustaceans with a thick exoskeleton and pincers.",
            imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/046/710/093/small/crab-isolated-on-transparent-background-png.png",
            behavioral: "Aggressive when threatened, excellent swimmers.",
            habitat: "Estuaries and mangroves.",
            food: "Small fish and mollusks.",
            category: "Crustacean",
            nickname: "Flower Crab",
            youtube_id: "YlEbg6fEKGI",
            temperament: "Defensive / Feisty (ดุร้ายเมื่อมีภัย/สู้ไม่ถอย)",
            statistics: [{ speed: "5 km/h", size: "20 cm", weight: "1 kg", lifespan: "3 years" }]
        },
        {
            id: 11,
            name: "Starfish",
            detail: "Echinoderms with typically five arms; can regenerate limbs.",
            imageUrl: "https://purepng.com/public/uploads/large/purepng.com-starfishfishseaoceanstarfish-98152464443820ojt.png",
            behavioral: "Slow moving using tube feet, suction-prying shells.",
            habitat: "Tide pools and coral reefs.",
            food: "Clams and oysters.",
            category: "Echinoderm",
            nickname: "Sea Star",
            youtube_id: "SpC6H-RkPyE",
            temperament: "Stationary / Neutral (นิ่งเฉย/ไม่ดุร้าย)",
            statistics: [{ speed: "0.1 km/h", size: "12-24 cm", weight: "Up to 5 kg", lifespan: "5-35 years" }]
        },
        {
            id: 12,
            name: "Clownfish",
            detail: "Small reef fish living among sea anemone tentacles.",
            imageUrl: "https://static.vecteezy.com/system/resources/previews/058/065/023/non_2x/stunning-closeup-of-an-ocellaris-clownfish-nemo-fish-in-vibrant-orange-and-white-stripes-free-png.png",
            behavioral: "Highly territorial within their anemone.",
            habitat: "Indo-Pacific coral reefs.",
            food: "Zooplankton and algae.",
            category: "Fish",
            nickname: "Anemonefish",
            youtube_id: "ULbMbLS0oxg",
            temperament: "Territorial (หวงถิ่นมาก)",
            statistics: [{ speed: "None", size: "7-10 cm", weight: "250 g", lifespan: "6-10 years" }]
        },
        {
            id: 13,
            name: "Shark",
            detail: "Apex predator that has existed for over 420 million years.",
            imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/052/511/193/small/great-white-shark-png.png",
            behavioral: "Apex predator, uses electromagnetic sensing.",
            habitat: "Cool coastal waters worldwide.",
            food: "Seals and large fish.",
            category: "Fish (Cartilaginous)",
            nickname: "White Death",
            youtube_id: "4HGNqFdaD34",
            temperament: "Aggressive / Predatory (ดุร้ายตามสัญชาตญาณนักล่า)",
            statistics: [{ speed: "56 km/h", size: "4.5-6 m", weight: "1,100-2,200 kg", lifespan: "70 years" }]
        },
        {
            id: 14,
            name: "Whale",
            detail: "The largest animals ever known to have lived on Earth.",
            imageUrl: "https://www.pngall.com/wp-content/uploads/7/Whale-PNG-Picture.png",
            behavioral: "Solitary or small groups, long-distance migration.",
            habitat: "Deep oceans worldwide.",
            food: "Krill.",
            category: "Mammal",
            nickname: "Gentle Giant",
            youtube_id: "bgiPTUy2RqI",
            temperament: "Gentle / Calm (ใจดีและสงบนิ่งมาก)",
            statistics: [{ speed: "30 km/h", size: "25-30 m", weight: "150,000 kg+", lifespan: "80-90 years" }]
        }
    ];

    return (
        <>
            <Navbar index={0} />
            <div className="min-h-screen bg-gradient-to-r from-[#000b1e] via-[#001a3a] to-[#002a5c]">
                <div className="max-w-6xl mx-auto flex flex-col gap-24 px-6 py-10">
                    {
                        oceanData.map((i) => (
                            i.id % 2 == 0 ? <AquaAnimalCard animaldata={i} direction="flex-row-reverse text-end" key={i.id} /> :
                                <AquaAnimalCard direction="flex-row" animaldata={i} key={i.id} />
                        ))
                    }

                </div>
            </div>
        </>
    )
}