var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DAS_1 = new ol.format.GeoJSON();
var features_DAS_1 = format_DAS_1.readFeatures(json_DAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DAS_1.addFeatures(features_DAS_1);
var lyr_DAS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DAS_1, 
                style: style_DAS_1,
                popuplayertitle: 'DAS',
                interactive: true,
                title: '<img src="styles/legend/DAS_1.png" /> DAS'
            });
var format_Sungai_2 = new ol.format.GeoJSON();
var features_Sungai_2 = format_Sungai_2.readFeatures(json_Sungai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_2.addFeatures(features_Sungai_2);
var lyr_Sungai_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_2, 
                style: style_Sungai_2,
                popuplayertitle: 'Sungai',
                interactive: true,
    title: 'Sungai<br />\
    <img src="styles/legend/Sungai_2_0.png" /> 1<br />\
    <img src="styles/legend/Sungai_2_1.png" /> 2<br />\
    <img src="styles/legend/Sungai_2_2.png" /> 3<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_DAS_1.setVisible(true);lyr_Sungai_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DAS_1,lyr_Sungai_2];
lyr_DAS_1.set('fieldAliases', {'OBJECTID': 'ID', 'FID_DAS_Ja': 'FID', 'NAMA_DAS': 'Nama DAS', 'LUAS_HA': 'Luas (Hektare)', 'WS_1': 'WS_1', 'Luas_KM': 'Luas (KM)', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Sungai_2.set('fieldAliases', {'OBJECTID': 'ID', 'FCODE': 'FID', 'NAMOBJ': 'Nama Sungai', 'JNSJPR': 'JNSJPR', 'ORDE': 'Orde', 'ANOTASI': 'ANOTASI', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_DAS_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_DAS_Ja': 'TextEdit', 'NAMA_DAS': 'TextEdit', 'LUAS_HA': 'TextEdit', 'WS_1': 'TextEdit', 'Luas_KM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sungai_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'FCODE': 'TextEdit', 'NAMOBJ': 'TextEdit', 'JNSJPR': 'TextEdit', 'ORDE': 'Range', 'ANOTASI': 'TextEdit', 'SRS_ID': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_DAS_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'FID_DAS_Ja': 'hidden field', 'NAMA_DAS': 'inline label - always visible', 'LUAS_HA': 'inline label - always visible', 'WS_1': 'hidden field', 'Luas_KM': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Sungai_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'FCODE': 'hidden field', 'NAMOBJ': 'inline label - visible with data', 'JNSJPR': 'hidden field', 'ORDE': 'inline label - visible with data', 'ANOTASI': 'hidden field', 'SRS_ID': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SHAPE_Leng': 'hidden field', });
lyr_Sungai_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});