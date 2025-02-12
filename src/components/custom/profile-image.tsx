import Image from "next/image"

export function ProfileImage() {
  return (
    <Image
      src="/profile.jpg"
      alt="Foto do Perfil"
      width={256}
      height={256}
      className="rounded-full w-24 h-24 sm:w-32 sm:h-32"
      priority
      quality={85}
      unoptimized={true}
      sizes="(max-width: 640px) 96px, 128px"
    />
  )
}