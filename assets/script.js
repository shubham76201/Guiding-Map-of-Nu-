
            // setView(Latitude, Longitude , Zoom Value)
            const map = L.map('map').setView([27.96162, 76.40184], 10);

            // s --> tile are replaced by images when loaded with map
            // z-> zoom level
            // x-> X-coordinate
            // y -> Y-coordinate
            const tileurl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

            //Attribution 

            const attribution = 'Made by Shubham Meher '

            // First Layer  which is tile 
            const tiles = L.tileLayer(tileurl, { attribution });
            tiles.addTo(map);


            // Second Layer like want to place a circle


            // Add a Rectange Layer

            // You can also add a Polygon
            var uni = [[27.9665, 76.3965], [27.9663, 76.402], [27.9659, 76.4038], [27.9651, 76.4051], [27.9605, 76.4054], [27.9577, 76.4059], [27.9549, 76.406], [27.9519, 76.4027], [27.955, 76.3954], [27.9556, 76.3929], [27.9582, 76.3895]];

            var polygon = L.polygon(uni, { color: 'green', opacity: '0.7', fillColor: 'white' }).addTo(map);



            // create an orange rectangle

            var ug2 = [[27.96033402235028, 76.40401311667569], [27.9606, 76.4045], [27.9597, 76.4049], [27.9579, 76.405], [27.9576, 76.4042]];
            var polygon = L.polygon(ug2, { color: 'red', opacity: '0.4' }).addTo(map);
            const marker = L.marker([27.9594, 76.4042]);
            marker.bindPopup('<h2> Niit UG -2</h2>');
            marker.addTo(map);

            


            // For the Amphi Theatre
            var amphi_ug2 = [[27.96029, 76.40389]
                , [27.9603, 76.40381]
                , [27.96031, 76.40374]
                , [27.9604, 76.40374]
                , [27.9604, 76.40387]
            ];

            var polygon = L.polygon(amphi_ug2, { color: 'green', opacity: '0.4' }).addTo(map);
            const marker1 = L.marker([27.96031, 76.40374]);
            marker1.bindPopup('<h2> Niit Amphi Theatre UG -2</h2>');
            marker1.addTo(map);

            // For the Jaal Pelu
            L.circle([27.96041, 76.4038], { color: 'green', opacity: '0.4', radius: '7' }).addTo(map);
            L.circle([27.96027, 76.40387], { radius: 2 }).addTo(map);
            const marker2 = L.marker([27.96027, 76.40387], { color: 'red' });
            marker2.bindPopup('<h2> Jaal Pelu</h2>');
            marker2.addTo(map);

            // PLoyline UG-2 to UG-1 
            var latlngs1 = [
                [27.96034, 76.40386],
                [27.9604, 76.4038],
                [27.96067, 76.40373],
                [27.96069, 76.4035],
                [27.96129, 76.40336],
                [27.96173, 76.40317]
            ];

            var polyline = L.polyline(latlngs1, { color: '#CFD8DC', innerWidth: '10', weight: 10 }).addTo(map);

            // zoom the map to the polyline
            map.fitBounds(polyline.getBounds());


            // Nescafe

            // var amphi_ug2 = [[27.96029,76.40389]
            //     ,[27.9603,76.40381]
            //     ,[27.96031,76.40374]
            //     ,[27.9604,76.40374]
            //     ,[27.9604,76.40387]
            //     ];

            // var polygon = L.polygon(amphi_ug2, {color: 'green',opacity:'0.4'}).addTo(map);
            // const marker1 = L.marker([27.96031,76.40374]);
            // marker1.bindPopup('<h2> Niit Amphi Theatre UG -2</h2>');
            // marker1.addTo(map);
            var bounds = [[27.96079, 76.40310], [27.96061, 76.40330]];
            L.rectangle(bounds, { color: "red", weight: 1 }).addTo(map);
            map.fitBounds(bounds);
            const marker5 = L.marker([27.96071, 76.40320]);
            marker5.bindPopup('<h2>Niit Nescafe</h2>');
            marker5.addTo(map);

            // Four Lane in Olive street 
            L.circle([27.96069, 76.4035], { radius: 2 }).addTo(map);

            // BasketBall Court 
            var bounds1 = [[27.96088, 76.40306], [27.9606, 76.4028]];
            //L.circle([27.96084,76.40323], {radius: 4}).addTo(map);
            L.rectangle(bounds1, { color: "yellow", weight: 1 }).addTo(map);
            const marker6 = L.marker([27.9607, 76.4029]);
            marker6.bindPopup('<h2>BasketBall Court</h2>');
            marker6.addTo(map);

            // zoom the map to the rectangle bounds
            map.fitBounds(bounds1);

            // UG-2 to mess
            var latlngs2 = [

                [27.9614, 76.40264],
                [27.96135, 76.40277],
                [27.96132, 76.40276],
                [27.96104, 76.40285],
                [27.96103, 76.40285],
                [27.96069, 76.4035],



            ];

            var polyline = L.polyline(latlngs2, { color: '#CFD8DC', innerWidth: '10', weight: 10 }).addTo(map);

            // zoom the map to the polyline
            map.fitBounds(polyline.getBounds());

            // ATm
            //L.circle([27.96104,76.40285], {radius: 4,color:'blue'}).addTo(map);
            var bounds1 = [[27.96106, 76.40288], [27.96121, 76.40306]];
            L.rectangle(bounds1, { color: "blue", weight: 1 }).addTo(map);
            const marker7 = L.marker([27.96113, 76.4030]);
            marker7.bindPopup('<h2>ICICI ATM Niit </h2>');
            marker7.addTo(map);

            // Gym
            //L.circle([27.96132,76.40276], {radius: 3,color:'white'}).addTo(map);
            var bounds1 = [[27.96132, 76.40245], [27.9611, 76.4027]];
            L.rectangle(bounds1, { color: "green", weight: 1 }).addTo(map);
            const marker8 = L.marker([27.96121, 76.40258]);
            marker8.bindPopup('<h2>Main Gym </h2>');
            marker8.addTo(map);

            // Tuck shop
            L.circle([27.96135, 76.40277], { radius: 3 }).addTo(map);

            // Hod 
            L.circle([27.9614, 76.40264], { radius: 3 }).addTo(map);

            // Three way in volley ball court 
            L.circle([27.96295, 76.40284], { radius: 4, color: 'red' }).addTo(map);

            // Three way to UG1
            var latlngs3 = [

                [27.96288, 76.40284],
                [27.96247, 76.40284],
                [27.96227, 76.40294],
                [27.96175, 76.40315],
                [27.96173, 76.40317]
            ];

            var polyline = L.polyline(latlngs3, { color: '#CFD8DC', innerWidth: '10', weight: 10 }).addTo(map);


            // Laundary 
            var bounds = [[27.96169, 76.40317], [27.9615, 76.40306]];
            const marker9 = L.marker([27.9616, 76.40311]);
            marker9.bindPopup('<h2>Laundary</h2>');
            marker9.addTo(map)

            // create an orange rectangle
            L.rectangle(bounds, { color: "#ff7800", weight: 1 }).addTo(map);

            var under_const = [
                [27.960, 76.403],
                [27.9604, 76.4006],
                [27.9572, 76.4004],
                [27.956, 76.40207],
                [27.9564, 76.40234],
                [27.95592, 76.40291],
                [27.95608, 76.40336]


            ];

            var polygon = L.polygon(under_const, { color: 'green', opacity: '0.4' }).addTo(map);
            const marker10 = L.marker([27.96031, 76.40374]);
            marker10.bindPopup('<h2> Niit Amphi Theatre UG -2</h2>');
            marker10.addTo(map);


            L.circle([27.9661, 76.4009], { radius: 2 }).addTo(map);
            const marker11 = L.marker([27.9661, 76.4009]);
            marker11.bindPopup('<h2> Main Gate Niit UNiversity</h2>');
            marker11.addTo(map);


            // For Ac1 
            var bounds = [[27.961, 76.40185], [27.9614, 76.40244]];
            const marker12 = L.marker([27.9612, 76.40220]);
            marker12.bindPopup('<h2>Academic Block AC-1</h2>');
            marker12.addTo(map)
            L.rectangle(bounds, { color: "#ff7800", weight: 1 }).addTo(map);

            // For AC2
            var bounds = [[27.96142, 76.40244], [27.96189, 76.40185]];
            const marker13 = L.marker([27.96160, 76.40220]);
            marker13.bindPopup('<h2>Academic Block AC-1</h2>');
            marker13.addTo(map)
            L.rectangle(bounds, { color: "green", weight: 1 }).addTo(map);

            // Main Reception
            const marker14 = L.marker([27.96139, 76.40185]);
            marker14.bindPopup('<h2>Main Reception</h2>');
            marker14.addTo(map)
            L.rectangle(bounds, { color: "green", weight: 1 }).addTo(map);


            var latlngs3 = [

                [27.96139, 76.40182],
                [27.96134, 76.40167],
                [27.96169, 76.40157],
                [27.96183, 76.40153],
                [27.96219, 76.40164],
                [27.96245, 76.40179],
                [27.96261, 76.4020],
                [27.96263, 76.40203],

                [27.96291, 76.40279],
                [27.96318, 76.40361],
                [27.96361, 76.40395],
                [27.96538, 76.40448],


            ];

            var polyline = L.polyline(latlngs3, { color: '#CFD8DC', innerWidth: '10', weight: 10 }).addTo(map);


            // footBall Court 
            var latlngs3 = [

                [27.96139, 76.40182],
                [27.96134, 76.40167],
                [27.96169, 76.40157],
                [27.96183, 76.40153],
                [27.96219, 76.40164],
                [27.96245, 76.40179],
                [27.96261, 76.4020],
                [27.96261, 76.40201]
            ];

            var polyline = L.polyline(latlngs3, { color: '#CFD8DC', innerWidth: '10', weight: 10 }).addTo(map);


            // North East point
            const marker15 = L.marker([27.96538, 76.4045]);
            marker15.bindPopup('<h2>North East Point</h2>');
            marker15.addTo(map)
            L.rectangle(bounds, { color: "green", weight: 1 }).addTo(map);

            // for Ug1
            var ug1 = [ [27.96185, 76.40317],[27.962, 76.4041],[27.96089, 76.40460],[27.96069, 76.40389],[27.96074,76.40355],[27.96127,76.40344]];
            var polygon = L.polygon(ug1, { color: 'red', opacity: '0.4' }).addTo(map);
            const marker16 = L.marker([27.96138,76.40344]);
            marker16.bindPopup('<h2> Niit UG -1</h2>');
            marker16.addTo(map);


            // Generate a list 
            function generatList(){
                const ul = document.querySelector('.list');
                storeList.forEach((shop) => {
                    const li = document.createElement('li');
                    const div = documentElement('div');
                    const a = documentElement('a');
                    const p = documentElement('p');

                    div.classList.add('shop-item');
                    a.innerText = shop.properties.name;
                    a.href = '#';
                    p.innerText = shop.properties.address;

                    div.appendChild(a);
                    div.appendChild(p);
                    li.appendChild(div);
                    ul.app.appendChild(li);

                });
                
            }

            generateList();

       