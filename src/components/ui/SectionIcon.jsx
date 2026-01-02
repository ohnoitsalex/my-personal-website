export const SectionIcon = ({ Icon, color, delay = '0s' }) => {
  return (
    <div
      className={`p-3 bg-gradient-to-br from-${color}/70 to-${color}/50 rounded-2xl shadow-lg shadow-${color}/30 animate-float`}
      style={{ animationDelay: delay }}
    >
      <Icon className="text-white" size={32} />
    </div>
  );
};
