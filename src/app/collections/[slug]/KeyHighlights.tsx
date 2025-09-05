export default function KeyHighlights({
  is_handmade,
  fabric_weight,
  printing_technique,
  material,
  dye_type,
  design_origin,
}: {
  is_handmade: boolean;
  fabric_weight: string;
  printing_technique: string;
  material: string;
  dye_type: string;
  design_origin: string
}) {

  const baseHighlights = [
    { label: 'Is Handmade', value: is_handmade ? 'Yes' : 'No' },
    { label: 'Fabric Weight', value: fabric_weight },
    { label: 'Technique', value: printing_technique },
    { label: 'Material', value: material },
    { label: 'Dye Type', value: dye_type },
    { label: 'Design Origin', value: design_origin },
  ];

  return (
    <div className="w-full max-w-3xl rounded-xl overflow-hidden">
      {/* Header */}
      <h3 className="font-semibold mb-2">
        Key Highlights</h3>


      {/* Listing Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-12 gap-y-2 py-0 text-sm text-gray-700">
        {/* Always visible items */}
        {baseHighlights.map((item, idx) => (
          <div key={idx} className={`listing-grid ${idx < 5 ? 'border-b border-gray-200 py-2' : ''
            }`}>
            <p
              className={`text-gray-500 py-2`}
            >{item.label}</p>
            <span className="text-gray-900">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
