var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Kontur_2 = new ol.format.GeoJSON();
var features_Kontur_2 = format_Kontur_2.readFeatures(json_Kontur_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kontur_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kontur_2.addFeatures(features_Kontur_2);
var lyr_Kontur_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kontur_2, 
                style: style_Kontur_2,
                popuplayertitle: "Kontur",
                interactive: true,
                title: '<img src="styles/legend/Kontur_2.png" /> Kontur'
            });
var format_Area_3 = new ol.format.GeoJSON();
var features_Area_3 = format_Area_3.readFeatures(json_Area_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_3.addFeatures(features_Area_3);
var lyr_Area_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_3, 
                style: style_Area_3,
                popuplayertitle: "Area",
                interactive: false,
                title: '<img src="styles/legend/Area_3.png" /> Area'
            });
var format_BM_4 = new ol.format.GeoJSON();
var features_BM_4 = format_BM_4.readFeatures(json_BM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BM_4.addFeatures(features_BM_4);
var lyr_BM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BM_4, 
                style: style_BM_4,
                popuplayertitle: "BM ",
                interactive: true,
                title: '<img src="styles/legend/BM_4.png" /> BM '
            });
var format_ManehatNatarboraBridge_5 = new ol.format.GeoJSON();
var features_ManehatNatarboraBridge_5 = format_ManehatNatarboraBridge_5.readFeatures(json_ManehatNatarboraBridge_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ManehatNatarboraBridge_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManehatNatarboraBridge_5.addFeatures(features_ManehatNatarboraBridge_5);
var lyr_ManehatNatarboraBridge_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ManehatNatarboraBridge_5, 
                style: style_ManehatNatarboraBridge_5,
                popuplayertitle: "Manehat Natarbora Bridge",
                interactive: true,
                title: '<img src="styles/legend/ManehatNatarboraBridge_5.png" /> Manehat Natarbora Bridge'
            });
var format_Kontur_6 = new ol.format.GeoJSON();
var features_Kontur_6 = format_Kontur_6.readFeatures(json_Kontur_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kontur_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kontur_6.addFeatures(features_Kontur_6);
var lyr_Kontur_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kontur_6, 
                style: style_Kontur_6,
                popuplayertitle: "Kontur",
                interactive: true,
                title: '<img src="styles/legend/Kontur_6.png" /> Kontur'
            });
var format_Area_7 = new ol.format.GeoJSON();
var features_Area_7 = format_Area_7.readFeatures(json_Area_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_7.addFeatures(features_Area_7);
var lyr_Area_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_7, 
                style: style_Area_7,
                popuplayertitle: "Area",
                interactive: false,
                title: '<img src="styles/legend/Area_7.png" /> Area'
            });
var format_Bangunan_8 = new ol.format.GeoJSON();
var features_Bangunan_8 = format_Bangunan_8.readFeatures(json_Bangunan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_8.addFeatures(features_Bangunan_8);
var lyr_Bangunan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_8, 
                style: style_Bangunan_8,
                popuplayertitle: "Bangunan",
                interactive: true,
                title: '<img src="styles/legend/Bangunan_8.png" /> Bangunan'
            });
var format_BM_9 = new ol.format.GeoJSON();
var features_BM_9 = format_BM_9.readFeatures(json_BM_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BM_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BM_9.addFeatures(features_BM_9);
var lyr_BM_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BM_9, 
                style: style_BM_9,
                popuplayertitle: "BM",
                interactive: true,
                title: '<img src="styles/legend/BM_9.png" /> BM'
            });
var format_ErmeraMarket_10 = new ol.format.GeoJSON();
var features_ErmeraMarket_10 = format_ErmeraMarket_10.readFeatures(json_ErmeraMarket_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ErmeraMarket_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ErmeraMarket_10.addFeatures(features_ErmeraMarket_10);
var lyr_ErmeraMarket_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ErmeraMarket_10, 
                style: style_ErmeraMarket_10,
                popuplayertitle: "Ermera Market",
                interactive: true,
                title: '<img src="styles/legend/ErmeraMarket_10.png" /> Ermera Market'
            });
var format_Kontur_11 = new ol.format.GeoJSON();
var features_Kontur_11 = format_Kontur_11.readFeatures(json_Kontur_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kontur_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kontur_11.addFeatures(features_Kontur_11);
var lyr_Kontur_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kontur_11, 
                style: style_Kontur_11,
                popuplayertitle: "Kontur",
                interactive: true,
                title: '<img src="styles/legend/Kontur_11.png" /> Kontur'
            });
var format_Area_12 = new ol.format.GeoJSON();
var features_Area_12 = format_Area_12.readFeatures(json_Area_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_12.addFeatures(features_Area_12);
var lyr_Area_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_12, 
                style: style_Area_12,
                popuplayertitle: "Area",
                interactive: false,
                title: '<img src="styles/legend/Area_12.png" /> Area'
            });
var format_Bangunan_13 = new ol.format.GeoJSON();
var features_Bangunan_13 = format_Bangunan_13.readFeatures(json_Bangunan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_13.addFeatures(features_Bangunan_13);
var lyr_Bangunan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_13, 
                style: style_Bangunan_13,
                popuplayertitle: "Bangunan",
                interactive: true,
                title: '<img src="styles/legend/Bangunan_13.png" /> Bangunan'
            });
var format_BM_14 = new ol.format.GeoJSON();
var features_BM_14 = format_BM_14.readFeatures(json_BM_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BM_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BM_14.addFeatures(features_BM_14);
var lyr_BM_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BM_14, 
                style: style_BM_14,
                popuplayertitle: "BM",
                interactive: true,
                title: '<img src="styles/legend/BM_14.png" /> BM'
            });
var format_BaucauMarket_15 = new ol.format.GeoJSON();
var features_BaucauMarket_15 = format_BaucauMarket_15.readFeatures(json_BaucauMarket_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaucauMarket_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaucauMarket_15.addFeatures(features_BaucauMarket_15);
var lyr_BaucauMarket_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaucauMarket_15, 
                style: style_BaucauMarket_15,
                popuplayertitle: "Baucau Market",
                interactive: true,
                title: '<img src="styles/legend/BaucauMarket_15.png" /> Baucau Market'
            });
var format_konturminor_16 = new ol.format.GeoJSON();
var features_konturminor_16 = format_konturminor_16.readFeatures(json_konturminor_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_konturminor_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_konturminor_16.addFeatures(features_konturminor_16);
var lyr_konturminor_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_konturminor_16, 
                style: style_konturminor_16,
                popuplayertitle: "kontur minor",
                interactive: true,
                title: '<img src="styles/legend/konturminor_16.png" /> kontur minor'
            });
var format_konturmayor_17 = new ol.format.GeoJSON();
var features_konturmayor_17 = format_konturmayor_17.readFeatures(json_konturmayor_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_konturmayor_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_konturmayor_17.addFeatures(features_konturmayor_17);
var lyr_konturmayor_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_konturmayor_17, 
                style: style_konturmayor_17,
                popuplayertitle: "kontur mayor",
                interactive: true,
                title: '<img src="styles/legend/konturmayor_17.png" /> kontur mayor'
            });
var format_Rute_18 = new ol.format.GeoJSON();
var features_Rute_18 = format_Rute_18.readFeatures(json_Rute_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rute_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rute_18.addFeatures(features_Rute_18);
var lyr_Rute_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rute_18, 
                style: style_Rute_18,
                popuplayertitle: "Rute",
                interactive: true,
                title: '<img src="styles/legend/Rute_18.png" /> Rute'
            });
var format_BM_19 = new ol.format.GeoJSON();
var features_BM_19 = format_BM_19.readFeatures(json_BM_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BM_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BM_19.addFeatures(features_BM_19);
var lyr_BM_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BM_19, 
                style: style_BM_19,
                popuplayertitle: "BM",
                interactive: true,
                title: '<img src="styles/legend/BM_19.png" /> BM'
            });
var format_LetefohoGleno_20 = new ol.format.GeoJSON();
var features_LetefohoGleno_20 = format_LetefohoGleno_20.readFeatures(json_LetefohoGleno_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LetefohoGleno_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LetefohoGleno_20.addFeatures(features_LetefohoGleno_20);
var lyr_LetefohoGleno_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LetefohoGleno_20, 
                style: style_LetefohoGleno_20,
                popuplayertitle: "Letefoho - Gleno",
                interactive: true,
                title: '<img src="styles/legend/LetefohoGleno_20.png" /> Letefoho - Gleno'
            });
var format_konturminor_21 = new ol.format.GeoJSON();
var features_konturminor_21 = format_konturminor_21.readFeatures(json_konturminor_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_konturminor_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_konturminor_21.addFeatures(features_konturminor_21);
var lyr_konturminor_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_konturminor_21, 
                style: style_konturminor_21,
                popuplayertitle: "kontur minor ",
                interactive: true,
                title: '<img src="styles/legend/konturminor_21.png" /> kontur minor '
            });
var format_konturmayor_22 = new ol.format.GeoJSON();
var features_konturmayor_22 = format_konturmayor_22.readFeatures(json_konturmayor_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_konturmayor_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_konturmayor_22.addFeatures(features_konturmayor_22);
var lyr_konturmayor_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_konturmayor_22, 
                style: style_konturmayor_22,
                popuplayertitle: "kontur mayor ",
                interactive: true,
                title: '<img src="styles/legend/konturmayor_22.png" /> kontur mayor '
            });
var format_BM_23 = new ol.format.GeoJSON();
var features_BM_23 = format_BM_23.readFeatures(json_BM_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BM_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BM_23.addFeatures(features_BM_23);
var lyr_BM_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BM_23, 
                style: style_BM_23,
                popuplayertitle: "BM ",
                interactive: true,
                title: '<img src="styles/legend/BM_23.png" /> BM '
            });
var format_Rute_24 = new ol.format.GeoJSON();
var features_Rute_24 = format_Rute_24.readFeatures(json_Rute_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rute_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rute_24.addFeatures(features_Rute_24);
var lyr_Rute_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rute_24, 
                style: style_Rute_24,
                popuplayertitle: "Rute ",
                interactive: true,
                title: '<img src="styles/legend/Rute_24.png" /> Rute '
            });
var format_SameBetano_25 = new ol.format.GeoJSON();
var features_SameBetano_25 = format_SameBetano_25.readFeatures(json_SameBetano_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SameBetano_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SameBetano_25.addFeatures(features_SameBetano_25);
var lyr_SameBetano_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SameBetano_25, 
                style: style_SameBetano_25,
                popuplayertitle: "Same Betano",
                interactive: true,
                title: '<img src="styles/legend/SameBetano_25.png" /> Same Betano'
            });
var format_konturminor_26 = new ol.format.GeoJSON();
var features_konturminor_26 = format_konturminor_26.readFeatures(json_konturminor_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_konturminor_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_konturminor_26.addFeatures(features_konturminor_26);
var lyr_konturminor_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_konturminor_26, 
                style: style_konturminor_26,
                popuplayertitle: "kontur minor",
                interactive: true,
                title: '<img src="styles/legend/konturminor_26.png" /> kontur minor'
            });
var format_konturmayor_27 = new ol.format.GeoJSON();
var features_konturmayor_27 = format_konturmayor_27.readFeatures(json_konturmayor_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_konturmayor_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_konturmayor_27.addFeatures(features_konturmayor_27);
var lyr_konturmayor_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_konturmayor_27, 
                style: style_konturmayor_27,
                popuplayertitle: "kontur mayor",
                interactive: true,
                title: '<img src="styles/legend/konturmayor_27.png" /> kontur mayor'
            });
var format_PIStation_28 = new ol.format.GeoJSON();
var features_PIStation_28 = format_PIStation_28.readFeatures(json_PIStation_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIStation_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIStation_28.addFeatures(features_PIStation_28);
var lyr_PIStation_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PIStation_28, 
                style: style_PIStation_28,
                popuplayertitle: "PI Station",
                interactive: true,
                title: '<img src="styles/legend/PIStation_28.png" /> PI Station'
            });
var format_BM_29 = new ol.format.GeoJSON();
var features_BM_29 = format_BM_29.readFeatures(json_BM_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BM_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BM_29.addFeatures(features_BM_29);
var lyr_BM_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BM_29, 
                style: style_BM_29,
                popuplayertitle: "BM",
                interactive: true,
                title: '<img src="styles/legend/BM_29.png" /> BM'
            });
var format_Rute_30 = new ol.format.GeoJSON();
var features_Rute_30 = format_Rute_30.readFeatures(json_Rute_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rute_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rute_30.addFeatures(features_Rute_30);
var lyr_Rute_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rute_30, 
                style: style_Rute_30,
                popuplayertitle: "Rute ",
                interactive: true,
                title: '<img src="styles/legend/Rute_30.png" /> Rute '
            });
var format_LautemLospalos_31 = new ol.format.GeoJSON();
var features_LautemLospalos_31 = format_LautemLospalos_31.readFeatures(json_LautemLospalos_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LautemLospalos_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LautemLospalos_31.addFeatures(features_LautemLospalos_31);
var lyr_LautemLospalos_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LautemLospalos_31, 
                style: style_LautemLospalos_31,
                popuplayertitle: "Lautem Lospalos",
                interactive: true,
                title: '<img src="styles/legend/LautemLospalos_31.png" /> Lautem Lospalos'
            });
var format_konturminor_32 = new ol.format.GeoJSON();
var features_konturminor_32 = format_konturminor_32.readFeatures(json_konturminor_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_konturminor_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_konturminor_32.addFeatures(features_konturminor_32);
var lyr_konturminor_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_konturminor_32, 
                style: style_konturminor_32,
                popuplayertitle: "kontur minor",
                interactive: true,
                title: '<img src="styles/legend/konturminor_32.png" /> kontur minor'
            });
var format_konturmayor_33 = new ol.format.GeoJSON();
var features_konturmayor_33 = format_konturmayor_33.readFeatures(json_konturmayor_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_konturmayor_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_konturmayor_33.addFeatures(features_konturmayor_33);
var lyr_konturmayor_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_konturmayor_33, 
                style: style_konturmayor_33,
                popuplayertitle: "kontur mayor",
                interactive: true,
                title: '<img src="styles/legend/konturmayor_33.png" /> kontur mayor'
            });
var format_PIStation_34 = new ol.format.GeoJSON();
var features_PIStation_34 = format_PIStation_34.readFeatures(json_PIStation_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIStation_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIStation_34.addFeatures(features_PIStation_34);
var lyr_PIStation_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PIStation_34, 
                style: style_PIStation_34,
                popuplayertitle: "PI Station",
                interactive: true,
                title: '<img src="styles/legend/PIStation_34.png" /> PI Station'
            });
var format_BM_35 = new ol.format.GeoJSON();
var features_BM_35 = format_BM_35.readFeatures(json_BM_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BM_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BM_35.addFeatures(features_BM_35);
var lyr_BM_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BM_35, 
                style: style_BM_35,
                popuplayertitle: "BM ",
                interactive: true,
                title: '<img src="styles/legend/BM_35.png" /> BM '
            });
var format_Rute_36 = new ol.format.GeoJSON();
var features_Rute_36 = format_Rute_36.readFeatures(json_Rute_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rute_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rute_36.addFeatures(features_Rute_36);
var lyr_Rute_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rute_36, 
                style: style_Rute_36,
                popuplayertitle: "Rute ",
                interactive: true,
                title: '<img src="styles/legend/Rute_36.png" /> Rute '
            });
var format_LautemCom_37 = new ol.format.GeoJSON();
var features_LautemCom_37 = format_LautemCom_37.readFeatures(json_LautemCom_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LautemCom_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LautemCom_37.addFeatures(features_LautemCom_37);
var lyr_LautemCom_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LautemCom_37, 
                style: style_LautemCom_37,
                popuplayertitle: "Lautem Com",
                interactive: true,
                title: '<img src="styles/legend/LautemCom_37.png" /> Lautem Com'
            });

var group_kontur1 = new ol.layer.Group({
                                layers: [lyr_konturminor_32,lyr_konturmayor_33,],
                                fold: "close",
                                title: "Kontur"});
var group_kontur2 = new ol.layer.Group({
                                layers: [lyr_konturminor_26,lyr_konturmayor_27,],
                                fold: "close",
                                title: "Kontur"});
var group_kontur3 = new ol.layer.Group({
                                layers: [lyr_konturminor_21,lyr_konturmayor_22,],
                                fold: "close",
                                title: "Kontur"});							
var group_kontur4 = new ol.layer.Group({
                                layers: [lyr_konturminor_16,lyr_konturmayor_17,],
                                fold: "close",
                                title: "Kontur"});

var group_LautemCom = new ol.layer.Group({
                                layers: [group_kontur1,lyr_PIStation_34,lyr_BM_35,lyr_Rute_36,lyr_LautemCom_37,],
                                fold: "close",
                                title: "Lautem Com"});
var group_LautemLospalos = new ol.layer.Group({
                                layers: [group_kontur2,lyr_PIStation_28,lyr_BM_29,lyr_Rute_30,lyr_LautemLospalos_31,],
                                fold: "close",
                                title: "Lautem Lospalos"});
var group_SameBetano = new ol.layer.Group({
                                layers: [group_kontur3,lyr_BM_23,lyr_Rute_24,lyr_SameBetano_25,],
                                fold: "close",
                                title: "Same Betano"});
var group_LetefohoGleno = new ol.layer.Group({
                                layers: [group_kontur4,lyr_Rute_18,lyr_BM_19,lyr_LetefohoGleno_20,],
                                fold: "close",
                                title: "Letefoho - Gleno"});
var group_BaucauMarket = new ol.layer.Group({
                                layers: [lyr_Kontur_11,lyr_Area_12,lyr_Bangunan_13,lyr_BM_14,lyr_BaucauMarket_15,],
                                fold: "close",
                                title: "Baucau Market"});
var group_ErmeraMarket = new ol.layer.Group({
                                layers: [lyr_Kontur_6,lyr_Area_7,lyr_Bangunan_8,lyr_BM_9,lyr_ErmeraMarket_10,],
                                fold: "close",
                                title: "Ermera Market"});
var group_ManehatNartaboraBridge = new ol.layer.Group({
                                layers: [lyr_Kontur_2,lyr_Area_3,lyr_BM_4,lyr_ManehatNatarboraBridge_5,],
                                fold: "close",
                                title: "Manehat Nartabora Bridge"});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,],
                                fold: "close",
                                title: "Basemap"});

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Kontur_2.setVisible(true);lyr_Area_3.setVisible(true);lyr_BM_4.setVisible(true);lyr_ManehatNatarboraBridge_5.setVisible(true);lyr_Kontur_6.setVisible(true);lyr_Area_7.setVisible(true);lyr_Bangunan_8.setVisible(true);lyr_BM_9.setVisible(true);lyr_ErmeraMarket_10.setVisible(true);lyr_Kontur_11.setVisible(true);lyr_Area_12.setVisible(true);lyr_Bangunan_13.setVisible(true);lyr_BM_14.setVisible(true);lyr_BaucauMarket_15.setVisible(true);lyr_konturminor_16.setVisible(true);lyr_konturmayor_17.setVisible(true);lyr_Rute_18.setVisible(true);lyr_BM_19.setVisible(true);lyr_LetefohoGleno_20.setVisible(true);lyr_konturminor_21.setVisible(true);lyr_konturmayor_22.setVisible(true);lyr_BM_23.setVisible(true);lyr_Rute_24.setVisible(true);lyr_SameBetano_25.setVisible(true);lyr_konturminor_26.setVisible(true);lyr_konturmayor_27.setVisible(true);lyr_PIStation_28.setVisible(true);lyr_BM_29.setVisible(true);lyr_Rute_30.setVisible(true);lyr_LautemLospalos_31.setVisible(true);lyr_konturminor_32.setVisible(true);lyr_konturmayor_33.setVisible(true);lyr_PIStation_34.setVisible(true);lyr_BM_35.setVisible(true);lyr_Rute_36.setVisible(true);lyr_LautemCom_37.setVisible(true);
var layersList = [group_Basemap,group_ManehatNartaboraBridge,group_ErmeraMarket,group_BaucauMarket,group_LetefohoGleno,group_SameBetano,group_LautemLospalos,group_LautemCom];
lyr_Kontur_2.set('fieldAliases', {'index': 'index', 'field_4': 'field_4', 'label': 'label', });
lyr_Area_3.set('fieldAliases', {'id': 'id', });
lyr_BM_4.set('fieldAliases', {'Easting': 'Easting', 'Northing': 'Northing', 'Elevation': 'Elevation', 'Code': 'Code', });
lyr_ManehatNatarboraBridge_5.set('fieldAliases', {'Name': 'Nama', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Dokumen': 'Dokumen', 'layer': 'layer', 'Proyek': 'Proyek', 'img': 'img', });
lyr_Kontur_6.set('fieldAliases', {'index': 'index', 'Elevation': 'Elevation', 'label': 'label', });
lyr_Area_7.set('fieldAliases', {'id': 'id', 'Building': 'Building', 'Info': 'Info', 'layer': 'layer', 'path': 'path', });
lyr_Bangunan_8.set('fieldAliases', {'Building': 'Building', 'Luas': 'Luas', 'Info': 'Info', });
lyr_BM_9.set('fieldAliases', {'Northing': 'Northing', 'Easting': 'Easting', 'Elevation': 'Elevation', 'Code': 'Code', });
lyr_ErmeraMarket_10.set('fieldAliases', {'Name': 'Nama', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Dokumen': 'Dokumen', 'layer': 'layer', 'Proyek': 'Proyek', 'Img': 'Img', });
lyr_Kontur_11.set('fieldAliases', {'index': 'index', 'Elevation': 'Elevation', 'label': 'label', });
lyr_Area_12.set('fieldAliases', {'fid': 'fid', });
lyr_Bangunan_13.set('fieldAliases', {'Info': 'Info', 'Luas (m2)': 'Luas (m2)', });
lyr_BM_14.set('fieldAliases', {'Northing': 'Northing', 'Easting': 'Easting', 'Elevation': 'Elevation', 'ID': 'ID', });
lyr_BaucauMarket_15.set('fieldAliases', {'Name': 'Nama', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Dokumen': 'Dokumen', 'layer': 'layer', 'Proyek': 'Proyek', 'Foto': 'Foto', });
lyr_konturminor_16.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', 'index': 'index', 'LABEL': 'LABEL', 'index2': 'index2', 'LABEL2': 'LABEL2', });
lyr_konturmayor_17.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', 'index': 'index', 'LABEL': 'LABEL', 'index2': 'index2', 'LABEL2': 'LABEL2', });
lyr_Rute_18.set('fieldAliases', {'Nama': 'Nama', 'Proyek': 'Proyek', 'Start': 'Start', 'End': 'End', 'Panjang': 'Panjang', 'Dokumen': 'Dokumen', });
lyr_BM_19.set('fieldAliases', {'S/N': 'S/N', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'LEVEL': 'LEVEL', 'CODE': 'CODE', 'KM': 'KM', 'SIDE': 'SIDE', });
lyr_LetefohoGleno_20.set('fieldAliases', {'Nama': 'Nama', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Dokumen': 'Dokumen', 'Proyek': 'Proyek', 'img': 'img', });
lyr_konturminor_21.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', 'indeks': 'indeks', 'label': 'label', });
lyr_konturmayor_22.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', 'indeks': 'indeks', 'label': 'label', });
lyr_BM_23.set('fieldAliases', {'BM-STATION': 'BM-STATION', 'HANDSIDE': 'HANDSIDE', 'BM-NO': 'BM-NO', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'ELEVATION': 'ELEVATION', });
lyr_Rute_24.set('fieldAliases', {'Name': 'Nama', 'Panjang': 'Panjang', 'Proyek': 'Proyek', 'Start': 'Start', 'End': 'End', 'Dokumen': 'Dokumen', });
lyr_SameBetano_25.set('fieldAliases', {'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Dokumen': 'Dokumen', 'Proyek': 'Proyek', 'Nama': 'Nama', });
lyr_konturminor_26.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', 'Indeks': 'Indeks', 'LabelIndex': 'LabelIndex', });
lyr_konturmayor_27.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', 'Indeks': 'Indeks', 'LabelIndex': 'LabelIndex', });
lyr_PIStation_28.set('fieldAliases', {'PI NO.': 'PI NO.', 'PI STATION': 'PI STATION', 'NORTHING': 'NORTHING', 'EASTING': 'EASTING', });
lyr_BM_29.set('fieldAliases', {'BM': 'BM', 'NORTHING': 'NORTHING', 'EASTING': 'EASTING', 'ELEVATION': 'ELEVATION', });
lyr_Rute_30.set('fieldAliases', {'Name': 'Nama', 'Proyek': 'Proyek', 'Start': 'Start', 'Panjang': 'Panjang', 'End': 'End', 'Dokumen': 'Dokumen', });
lyr_LautemLospalos_31.set('fieldAliases', {'Latitude': 'Latitude', 'Dokumen': 'Dokumen', 'Proyek': 'Proyek', 'img': 'img', 'Nama': 'Nama', 'Longitude': 'Longitude', });
lyr_konturminor_32.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', 'indeks': 'indeks', 'label': 'label', });
lyr_konturmayor_33.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', 'indeks': 'indeks', 'label': 'label', });
lyr_PIStation_34.set('fieldAliases', {'PI NO.': 'PI NO.', 'PI STATION': 'PI STATION', 'NORTHING': 'NORTHING', 'EASTING': 'EASTING', });
lyr_BM_35.set('fieldAliases', {'BM': 'BM', 'NORTHING': 'NORTHING', 'EASTING': 'EASTING', 'ELEVATION': 'ELEVATION', });
lyr_Rute_36.set('fieldAliases', {'Name': 'Nama', 'Proyek': 'Proyek', 'Panjang': 'Panjang', 'Start': 'Start', 'End': 'End', 'Dokumen': 'Dokumen', });
lyr_LautemCom_37.set('fieldAliases', {'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Dokumen': 'Dokumen', 'Proyek': 'Proyek', 'img': 'img', 'Nama': 'Nama', });
lyr_Kontur_2.set('fieldImages', {'index': 'TextEdit', 'field_4': 'TextEdit', 'label': 'TextEdit', });
lyr_Area_3.set('fieldImages', {'id': '', });
lyr_BM_4.set('fieldImages', {'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Elevation': 'TextEdit', 'Code': 'TextEdit', });
lyr_ManehatNatarboraBridge_5.set('fieldImages', {'Name': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Dokumen': 'TextEdit', 'layer': 'TextEdit', 'Proyek': 'TextEdit', 'img': '', });
lyr_Kontur_6.set('fieldImages', {'index': 'TextEdit', 'Elevation': 'TextEdit', 'label': 'TextEdit', });
lyr_Area_7.set('fieldImages', {'id': 'TextEdit', 'Building': 'TextEdit', 'Info': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Bangunan_8.set('fieldImages', {'Building': 'TextEdit', 'Luas': 'TextEdit', 'Info': 'TextEdit', });
lyr_BM_9.set('fieldImages', {'Northing': 'TextEdit', 'Easting': 'TextEdit', 'Elevation': 'TextEdit', 'Code': 'TextEdit', });
lyr_ErmeraMarket_10.set('fieldImages', {'Nama': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Dokumen': 'TextEdit', 'layer': 'TextEdit', 'Proyek': 'TextEdit', 'Img': '', });
lyr_Kontur_11.set('fieldImages', {'index': 'TextEdit', 'Elevation': 'TextEdit', 'label': 'TextEdit', });
lyr_Area_12.set('fieldImages', {'fid': 'TextEdit', });
lyr_Bangunan_13.set('fieldImages', {'Info': 'TextEdit', 'Luas (m2)': 'TextEdit', });
lyr_BM_14.set('fieldImages', {'Northing': 'TextEdit', 'Easting': 'TextEdit', 'Elevation': 'TextEdit', 'ID': 'TextEdit', });
lyr_BaucauMarket_15.set('fieldImages', {'Nama': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Dokumen': 'TextEdit', 'layer': 'TextEdit', 'Proyek': 'TextEdit', 'Foto': '', });
lyr_konturminor_16.set('fieldImages', {'ID': 'TextEdit', 'ELEV': 'TextEdit', 'index': 'TextEdit', 'LABEL': 'TextEdit', 'index2': 'TextEdit', 'LABEL2': 'TextEdit', });
lyr_konturmayor_17.set('fieldImages', {'ID': 'TextEdit', 'ELEV': 'TextEdit', 'index': 'TextEdit', 'LABEL': 'TextEdit', 'index2': 'TextEdit', 'LABEL2': 'TextEdit', });
lyr_Rute_18.set('fieldImages', {'Nama': '', 'Proyek': '', 'Start': '', 'End': '', 'Panjang': '', 'Dokumen': '', });
lyr_BM_19.set('fieldImages', {'S/N': 'TextEdit', 'EASTING': 'TextEdit', 'NORTHING': 'TextEdit', 'LEVEL': 'TextEdit', 'CODE': 'TextEdit', 'KM': 'TextEdit', 'SIDE': 'TextEdit', });
lyr_LetefohoGleno_20.set('fieldImages', {'Nama': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Dokumen': 'TextEdit', 'Proyek': 'TextEdit', 'img': 'TextEdit', });
lyr_konturminor_21.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', 'indeks': 'TextEdit', 'label': 'TextEdit', });
lyr_konturmayor_22.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', 'indeks': 'TextEdit', 'label': 'TextEdit', });
lyr_BM_23.set('fieldImages', {'BM-STATION': 'TextEdit', 'HANDSIDE': 'TextEdit', 'BM-NO': 'TextEdit', 'EASTING': 'TextEdit', 'NORTHING': 'TextEdit', 'ELEVATION': 'TextEdit', });
lyr_Rute_24.set('fieldImages', {'Name': 'TextEdit', 'Panjang': 'TextEdit', 'Proyek': 'TextEdit', 'Start': 'TextEdit', 'End': 'TextEdit', 'Dokumen': 'TextEdit', });
lyr_SameBetano_25.set('fieldImages', {'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Dokumen': 'TextEdit', 'Proyek': 'TextEdit', 'Nama': '', });
lyr_konturminor_26.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', 'Indeks': 'TextEdit', 'LabelIndex': 'TextEdit', });
lyr_konturmayor_27.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', 'Indeks': 'TextEdit', 'LabelIndex': 'TextEdit', });
lyr_PIStation_28.set('fieldImages', {'PI NO.': 'TextEdit', 'PI STATION': 'TextEdit', 'NORTHING': 'TextEdit', 'EASTING': 'TextEdit', });
lyr_BM_29.set('fieldImages', {'BM': 'TextEdit', 'NORTHING': 'TextEdit', 'EASTING': 'TextEdit', 'ELEVATION': 'TextEdit', });
lyr_Rute_30.set('fieldImages', {'Name': 'TextEdit', 'Proyek': 'TextEdit', 'Start': 'TextEdit', 'Panjang': 'TextEdit', 'End': 'TextEdit', 'Dokumen': 'TextEdit', });
lyr_LautemLospalos_31.set('fieldImages', {'Latitude': 'TextEdit', 'Dokumen': 'TextEdit', 'Proyek': 'TextEdit', 'img': '', 'Nama': '', 'Longitude': 'TextEdit', });
lyr_konturminor_32.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', 'indeks': 'TextEdit', 'label': 'TextEdit', });
lyr_konturmayor_33.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', 'indeks': 'TextEdit', 'label': 'TextEdit', });
lyr_PIStation_34.set('fieldImages', {'PI NO.': 'TextEdit', 'PI STATION': 'TextEdit', 'NORTHING': 'TextEdit', 'EASTING': 'TextEdit', });
lyr_BM_35.set('fieldImages', {'BM': 'TextEdit', 'NORTHING': 'TextEdit', 'EASTING': 'TextEdit', 'ELEVATION': 'TextEdit', });
lyr_Rute_36.set('fieldImages', {'Name': 'TextEdit', 'Proyek': 'TextEdit', 'Panjang': 'TextEdit', 'Start': 'TextEdit', 'End': 'TextEdit', 'Dokumen': 'TextEdit', });
lyr_LautemCom_37.set('fieldImages', {'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Dokumen': 'TextEdit', 'Proyek': 'TextEdit', 'img': '', 'Nama': '', });
lyr_Kontur_2.set('fieldLabels', {'index': 'hidden field', 'Elevation': 'inline label - visible with data', 'label': 'hidden field', });
lyr_Area_3.set('fieldLabels', {'id': 'no label', });
lyr_BM_4.set('fieldLabels', {'Easting': 'inline label - visible with data', 'Northing': 'inline label - visible with data', 'Elevation': 'inline label - visible with data', 'Code': 'inline label - visible with data', });
lyr_ManehatNatarboraBridge_5.set('fieldLabels', {'Name': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Dokumen': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Proyek': 'inline label - visible with data', 'img': 'no label', });
lyr_Kontur_6.set('fieldLabels', {'index': 'hidden field', 'Elevation': 'inline label - visible with data', 'label': 'hidden field', });
lyr_Area_7.set('fieldLabels', {'id': 'no label', 'Building': 'no label', 'Info': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Bangunan_8.set('fieldLabels', {'Building': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Info': 'inline label - visible with data', });
lyr_BM_9.set('fieldLabels', {'Northing': 'header label - visible with data', 'Easting': 'inline label - visible with data', 'Elevation': 'inline label - visible with data', 'Code': 'inline label - visible with data', });
lyr_ErmeraMarket_10.set('fieldLabels', {'Name': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Dokumen': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Proyek': 'inline label - visible with data', 'Img': 'no label', });
lyr_Kontur_11.set('fieldLabels', {'index': 'hidden field', 'Elevation': 'inline label - visible with data', 'label': 'hidden field', });
lyr_Area_12.set('fieldLabels', {'fid': 'no label', });
lyr_Bangunan_13.set('fieldLabels', {'Info': 'inline label - visible with data', 'Luas (m2)': 'inline label - visible with data', });
lyr_BM_14.set('fieldLabels', {'Northing': 'inline label - visible with data', 'Easting': 'inline label - visible with data', 'Elevation': 'inline label - visible with data', 'ID': 'inline label - visible with data', });
lyr_BaucauMarket_15.set('fieldLabels', {'Name': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Dokumen': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Proyek': 'inline label - visible with data', 'Foto': 'no label', });
lyr_konturminor_16.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'inline label - visible with data', 'index': 'hidden field', 'LABEL': 'hidden field', 'index2': 'hidden field', 'LABEL2': 'hidden field', });
lyr_konturmayor_17.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'inline label - visible with data', 'index': 'hidden field', 'LABEL': 'hidden field', 'index2': 'hidden field', 'LABEL2': 'hidden field', });
lyr_Rute_18.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Proyek': 'inline label - visible with data', 'Start': 'inline label - visible with data', 'End': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', 'Dokumen': 'inline label - visible with data', });
lyr_BM_19.set('fieldLabels', {'S/N': 'inline label - visible with data', 'EASTING': 'inline label - visible with data', 'NORTHING': 'inline label - visible with data', 'LEVEL': 'inline label - visible with data', 'CODE': 'inline label - visible with data', 'KM': 'inline label - visible with data', 'SIDE': 'inline label - visible with data', });
lyr_LetefohoGleno_20.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Dokumen': 'inline label - visible with data', 'Proyek': 'inline label - visible with data', 'img': 'no label', });
lyr_konturminor_21.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ELEV': 'inline label - visible with data', 'indeks': 'hidden field', 'label': 'hidden field', });
lyr_konturmayor_22.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ELEV': 'inline label - visible with data', 'indeks': 'hidden field', 'label': 'hidden field', });
lyr_BM_23.set('fieldLabels', {'BM-STATION': 'inline label - visible with data', 'HANDSIDE': 'inline label - visible with data', 'BM-NO': 'inline label - visible with data', 'EASTING': 'inline label - visible with data', 'NORTHING': 'inline label - visible with data', 'ELEVATION': 'inline label - visible with data', });
lyr_Rute_24.set('fieldLabels', {'Name': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', 'Proyek': 'inline label - visible with data', 'Start': 'inline label - visible with data', 'End': 'inline label - visible with data', 'Dokumen': 'inline label - visible with data', });
lyr_SameBetano_25.set('fieldLabels', {'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Dokumen': 'inline label - visible with data', 'Proyek': 'inline label - visible with data', 'Nama': 'inline label - visible with data', });
lyr_konturminor_26.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ELEV': 'inline label - visible with data', 'Indeks': 'hidden field', 'LabelIndex': 'hidden field', });
lyr_konturmayor_27.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ELEV': 'inline label - visible with data', 'Indeks': 'hidden field', 'LabelIndex': 'hidden field', });
lyr_PIStation_28.set('fieldLabels', {'PI NO.': 'inline label - visible with data', 'PI STATION': 'inline label - visible with data', 'NORTHING': 'inline label - visible with data', 'EASTING': 'inline label - visible with data', });
lyr_BM_29.set('fieldLabels', {'BM': 'inline label - visible with data', 'NORTHING': 'inline label - visible with data', 'EASTING': 'inline label - visible with data', 'ELEVATION': 'inline label - visible with data', });
lyr_Rute_30.set('fieldLabels', {'Name': 'inline label - visible with data', 'Proyek': 'inline label - visible with data', 'Start': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', 'End': 'header label - visible with data', 'Dokumen': 'inline label - visible with data', });
lyr_LautemLospalos_31.set('fieldLabels', {'Latitude': 'inline label - visible with data', 'Dokumen': 'inline label - visible with data', 'Proyek': 'inline label - visible with data', 'img': 'no label', 'Nama': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_konturminor_32.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ELEV': 'inline label - visible with data', 'indeks': 'hidden field', 'label': 'hidden field', });
lyr_konturmayor_33.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ELEV': 'inline label - visible with data', 'indeks': 'hidden field', 'label': 'hidden field', });
lyr_PIStation_34.set('fieldLabels', {'PI NO.': 'inline label - visible with data', 'PI STATION': 'inline label - visible with data', 'NORTHING': 'inline label - always visible', 'EASTING': 'inline label - visible with data', });
lyr_BM_35.set('fieldLabels', {'BM': 'inline label - visible with data', 'NORTHING': 'inline label - visible with data', 'EASTING': 'inline label - visible with data', 'ELEVATION': 'inline label - visible with data', });
lyr_Rute_36.set('fieldLabels', {'Name': 'inline label - visible with data', 'Proyek': 'inline label - visible with data', 'Panjang': 'inline label - visible with data', 'Start': 'inline label - visible with data', 'End': 'inline label - visible with data', 'Dokumen': 'inline label - visible with data', });
lyr_LautemCom_37.set('fieldLabels', {'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Dokumen': 'inline label - visible with data', 'Proyek': 'inline label - visible with data', 'img': 'no label', 'Nama': 'inline label - visible with data', });
lyr_LautemCom_37.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});