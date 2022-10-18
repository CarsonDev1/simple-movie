import React from "react";

const Button = () => {
	return (
		<button
			onClick={() => navigate(`/movie/${id}`)}
			className="py-3 px-6 rounded-lg capitalize bg-primary w-full"
		>
			Watch Now
		</button>
	);
};

export default Button;
