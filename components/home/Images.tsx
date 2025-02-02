import Image from "next/image"

export const ogs = [
  {
    key: "og1",
    item: (
      <Image
        src="/showcase/og1.webp"
        alt="og1"
        width={200}
        height={105}
        className="object-contain"
        loading="eager"
        priority
      />
    ),
  },
  {
    key: "og2",
    item: (
      <Image
        src="/showcase/og2.webp"
        alt="og2"
        width={200}
        height={105}
        className="object-contain"
      />
    ),
  },
  {
    key: "og3",
    item: (
      <Image
        src="/showcase/og3.webp"
        alt="og3"
        width={200}
        height={105}
        className="object-contain"
      />
    ),
  },
]

export const xHeaders = [
  {
    key: "x-1",
    item: (
      <Image
        src="/showcase/x-1.webp"
        alt="x-1"
        width={240}
        height={80}
        className="object-contain"
        loading="eager"
        priority
      />
    ),
  },
  {
    key: "x-2",
    item: (
      <Image
        src="/showcase/x-2.webp"
        alt="x-2"
        width={240}
        height={80}
        className="object-contain"
      />
    ),
  },
]
