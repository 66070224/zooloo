import AquaAnimalCard from "@/components/animal/Aquaanimalcard"
import Navbar from "@/components/navbar/Navbar"
import {oceanData} from "@/data/aquaanimal"
export default function Ocean() {
    

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