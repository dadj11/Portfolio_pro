import { ArrowUp, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../data/profile";

const navigation = [
	{ label: "Accueil", href: "#home" },
	{ label: "À propos", href: "#about" },
	{ label: "Compétences", href: "#skills" },
	{ label: "Projets", href: "#projects" },
	{ label: "Contact", href: "#contact" },
];

export default function Footer() {
	return (
		<footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
			<div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
				<div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
					<div>
						<a
							href="#home"
							className="text-xl font-bold tracking-tight text-white transition-colors hover:text-blue-400"
						>
							Godwin<span className="text-blue-500">.dev</span>
						</a>
						<p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
							{profile.description}
						</p>
						<div className="mt-5 flex items-center gap-3 text-sm text-slate-400">
							<MapPin size={16} className="text-blue-400" aria-hidden="true" />
							<span>{profile.location}</span>
						</div>
					</div>

					<div>
						<h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
							Navigation
						</h2>
						<ul className="mt-4 space-y-3 text-sm">
							{navigation.map((item) => (
								<li key={item.href}>
									<a
										href={item.href}
										className="transition-colors hover:text-blue-400"
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
							Restons en contact
						</h2>
						<a
							href={`mailto:${profile.email}`}
							className="mt-4 flex items-center gap-3 text-sm transition-colors hover:text-blue-400"
						>
							<Mail size={16} className="text-blue-400" aria-hidden="true" />
							<span>{profile.email}</span>
						</a>
						<div className="mt-5 flex items-center gap-3">
							<a
								href={profile.github}
								target="_blank"
								rel="noreferrer"
								aria-label="GitHub de Godwin"
								className="rounded-lg border border-slate-700 p-2.5 text-slate-300 transition-colors hover:border-blue-500 hover:text-blue-400"
							>
								<FaGithub size={18} aria-hidden="true" />
							</a>
							<a
								href={profile.linkedin}
								target="_blank"
								rel="noreferrer"
								aria-label="LinkedIn de Godwin"
								className="rounded-lg border border-slate-700 p-2.5 text-slate-300 transition-colors hover:border-blue-500 hover:text-blue-400"
							>
								<FaLinkedin size={18} aria-hidden="true" />
							</a>
						</div>
					</div>
				</div>

				<div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
					<p>© {new Date().getFullYear()} {profile.name}. Tous droits réservés.</p>
					<a
						href="#home"
						aria-label="Retourner en haut de la page"
						className="flex w-fit items-center gap-2 text-slate-400 transition-colors hover:text-blue-400"
					>
						<span>Retour en haut</span>
						<ArrowUp size={16} aria-hidden="true" />
					</a>
				</div>
			</div>
		</footer>
	);
}
