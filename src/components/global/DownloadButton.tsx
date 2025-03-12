"use client";

type DownloadButtonProps = {
	imageUrl: string;
	fileName: string;
};

export default function DownloadButton({
	imageUrl,
	fileName,
}: DownloadButtonProps) {
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = imageUrl;
		link.download = fileName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<button
			onClick={handleDownload}
			className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
		>
			Download Map
		</button>
	);
}
