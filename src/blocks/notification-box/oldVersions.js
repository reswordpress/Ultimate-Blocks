const { RichText } = wp.editor;

export const version_1_1_2 = props => {
	return (
		<div className={props.className}>
			<div className={props.attributes.ub_selected_notify}>
				<p className="ub_notify_text">
					{props.attributes.ub_notify_info}
				</p>
			</div>
		</div>
	);
};

export const version_1_1_4 = props => {
	const { align, ub_notify_info, ub_selected_notify } = props.attributes;
	return (
		<div className={props.className}>
			<div className={ub_selected_notify}>
				<RichText.Content
					tagName="p"
					style={{ textAlign: align }}
					value={ub_notify_info}
				/>
			</div>
		</div>
	);
};

export const version_1_1_5 = props => {
	const { align, ub_notify_info, ub_selected_notify } = props.attributes;
	return (
		<div className={props.className}>
			<div className={ub_selected_notify}>
				<RichText.Content
					tagName="p"
					className={'ub_notify_text'}
					style={{ textAlign: align }}
					value={ub_notify_info}
				/>
			</div>
		</div>
	);
};
