import Image from "next/image"

export function ProfileImage() {
  return (
    <Image
      src="/profile.jpg"
      alt="Foto do Perfil"
      width={128}
      height={128}
      className="rounded-full w-24 h-24 sm:w-32 sm:h-32"
      priority
      quality={100}
      unoptimized={true}
    />
  )
}