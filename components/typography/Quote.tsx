import clsx from "clsx";
import { motion } from "framer-motion";

import { TypographyProps } from "@/lib/types";
import { animationVariants } from "@/lib/animations";

interface Props extends TypographyProps {
	quotationSize?: string | number;
}

const Quote = ({ children, className, animation, quotationSize }: Props) => {
	return (
		<blockquote
			className={clsx(
				"mt-6 border-l pl-6 italic gap-2 font-serif",
				className
			)}
		>
			<motion.div className="flex" variants={animationVariants} {...animation}>
				<span style={{ fontSize: quotationSize }}>“</span>
				<span>{children}</span>
			</motion.div>
		</blockquote>
	);
};

export default Quote;
