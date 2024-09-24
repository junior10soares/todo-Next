import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <div className="px-14">
            <div className="flex flex-col items-start lg:flex-row justify-between border-b py-6">
                <Link href="/" className="text-2xl font-extrabold text-white">
                    <Image
                        src="/logo.png"
                        width={150}
                        height={36}
                        alt="logo"
                    />
                </Link>

                <strong className="font-normal text-lg lg:font-bold lg:text-2xl">
                    Bem-vindo de volta, Marcus
                </strong>

                <p className="text-gray-custom">Segunda, 01 de dezembro de 2025</p>
            </div>
        </div>
    );
}
