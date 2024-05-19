"use client";
// client/pages/todo/create.tsx```` nb
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

const Page = () => {
	const [data, setData] = useState({
		weight: 0,
	});
	const router = useRouter();
	const [title, setTitle] = useState("");

	const handleSubmit = async () => {
		if (!title) {
			toast.error("All fields are required");
			return;
		}

		setTitle("");

		try {
			const response = await axios.post("/api/entry", { title });
			const data = response.data;

			console.log(response, data);

			console.log(data);

			console.log("Todo created with ID:", data.id);

			toast.success("Todo Created");
			router.push("/todo");
			router.refresh();
		} catch (error) {
			console.error("Error creating todo:", error);
			toast.error("Error creating todo");
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	return (
		<div className="mt-32">
			<h1 className="text-center text-neutral-100 mb-10 jura text-[3rem]">
				Today&apos;s Entry
			</h1>
			<div className=" flex gap-4">
				<input
					type="text"
					value={title}
					onChange={handleChange}
					placeholder="Weight"
					className="px-8 py-3 rounded-full bg-neutral-800 text-white text-[1.5rem] xl:text-[1.75rem] w-2/3"
				/>
				<input
					type="text"
					value={title}
					onChange={handleChange}
					placeholder="Waist"
					className="px-8 py-3 rounded-full bg-neutral-800 text-white text-[1.5rem] xl:text-[1.75rem] w-2/3"
				/>
				<input
					type="text"
					value={title}
					onChange={handleChange}
					placeholder="Hip"
					className="px-8 py-3 rounded-full bg-neutral-800 text-white text-[1.5rem] xl:text-[1.75rem] w-2/3"
				/>
				<button
					onClick={handleSubmit}
					className="bg-black text-white w-1/3 flex items-center justify-center rounded-full border-[1px] border-neutral-500"
				>
					Add Entry
				</button>
			</div>
		</div>
	);
};

export default Page;
