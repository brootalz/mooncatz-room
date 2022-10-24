const Room = () => {
	

	return (
		<>
      <div className="room">
	      <div className="roomLayer" style={{zIndex: 101}}>
	      	<img alt=""
	      		data-isreversed="false"
	      		data-assetnormal="/images/roomAssets/blank.png"
	      		data-assetreverse="/images/roomAssets/blank.png"
	      		src="/images/roomAssets/Base Floor.png" id="floorColor" />
	      </div>
	      <div className="roomLayer" style={{zIndex: 102}}>
	      	<img alt=""
	      		data-isreversed="false"
	      		data-assetnormal="/images/roomAssets/blank.png"
	      		data-assetreverse="/images/roomAssets/blank.png"
	      		src="/images/roomAssets/Base Wall.png" id="wallColor" />
	      </div>
	      <div className="roomLayer" style={{zIndex: 103}}>
					<img alt=""
						data-isreversed="false"
						data-assetnormal="/images/roomAssets/blank.png"
						data-assetreverse="/images/roomAssets/blank.png"
						src="/images/roomAssets/blank.png" id="wallPaper" />
	      </div>
	      <div className="roomLayer" style={{zIndex: 104}}>
					<img alt=""
						data-isreversed="false"
						data-assetnormal="/images/roomAssets/blank.png"
						data-assetreverse="/images/roomAssets/blank.png"
						src="/images/roomAssets/blank.png" id="wallTrim" />
	      </div>
	      <div className="roomLayer" style={{zIndex: 105}}>
	      	<img alt=""
	      		data-isreversed="false"
	      		data-assetnormal="/images/roomAssets/blank.png"
	      		data-assetreverse="/images/roomAssets/blank.png"
	      		src="/images/roomAssets/Base Frame.png" id="frame" />
	      </div>
	      <div className="roomLayer" style={{zIndex: 106}}>
					<img alt=""
						data-isreversed="false"
						data-assetnormal="/images/roomAssets/blank.png"
						data-assetreverse="/images/roomAssets/blank.png"
						src="/images/roomAssets/Base Rug.png" id="rugColor" />
	      </div>
	      <div className="roomLayer" style={{zIndex: 107}}>
					<img alt=""
						data-isreversed="false"
						data-assetnormal="/images/roomAssets/blank.png"
						data-assetreverse="/images/roomAssets/blank.png"
						src="/images/roomAssets/blank.png" id="rugDesign" />
	      </div>

	      {/* Window BEGIN */}
	      <div className="roomLayer" data-isreversed={ false } id="windowBase" style={{zIndex: 108}}>
					<div className="roomSubLayer" style={{zIndex: 108}}>
						<img alt=""
							data-isreversed="false"
							data-assetnormal="/images/roomAssets/blank.png"
							data-assetreverse="/images/roomAssets/blank.png"
							src="/images/roomAssets/Base Window.png" id="windowType" />
					</div>
					<div className="roomSubLayer" style={{zIndex: 109}}>
						<img alt=""
						data-isreversed="false"
						data-assetnormal="/images/roomAssets/blank.png"
						data-assetreverse="/images/roomAssets/blank.png"
						src="/images/roomAssets/blank.png" id="windowCurtains" />
					</div>
	      </div>
	    {/* Window END */}

			{/* Bed BEGIN */}
	      <div className="roomLayer" data-isreversed={ false } id="bedBase" style={{zIndex: 110}}>
		      <div className="roomSubLayer" style={{zIndex: 111}}>
		      	<img alt=""
		      		data-isreversed="false"
		      		data-assetnormal="/images/roomAssets/blank.png"
		      		data-assetreverse="/images/roomAssets/blank.png"
		      		src="/images/roomAssets/Base Bed.png" id="bedFrame" />
		      </div>
		      <div className="roomSubLayer" style={{zIndex: 112}}>
						<img alt=""
							data-isreversed="false"
							data-assetnormal="/images/roomAssets/blank.png"
							data-assetreverse="/images/roomAssets/blank.png"
							src="/images/roomAssets/blank.png" id="bedDesign" />
		      </div>
		      <div className="roomSubLayer" style={{zIndex: 113}}>
						<img alt=""
							data-isreversed="false"
							data-assetnormal="/images/roomAssets/blank.png"
							data-assetreverse="/images/roomAssets/blank.png"
							src="/images/roomAssets/blank.png" id="bedPillow" />
		      </div>
		      <div className="roomSubLayer" style={{zIndex: 115}}>
		      	<img alt=""
		      		data-isreversed="false"
		      		data-assetnormal="/images/roomAssets/blank.png"
		      		data-assetreverse="/images/roomAssets/blank.png"
		      		src="/images/roomAssets/blank.png" id="bedSheet" />
		      </div>
	      </div>
	      {/* Bed END */}

	      {/* Desk BEGIN */}
	      <div className="roomLayer" id="deskBase" style={{zIndex: 116}}>
		      <div className="roomSubLayer" style={{zIndex: 116}}>
						<img alt=""
							data-isreversed="false"
							data-assetnormal="/images/roomAssets/blank.png"
							data-assetreverse="/images/roomAssets/blank.png"
							src="/images/roomAssets/blank.png" id="deskType" />
					</div>
		      <div className="roomSubLayer" style={{zIndex: 117}}>
						<img alt=""
							data-isreversed="false"
							data-assetnormal="/images/roomAssets/blank.png"
							data-assetreverse="/images/roomAssets/blank.png"
							src="/images/roomAssets/blank.png" id="deskChair" />
		      </div>
		      <div className="roomSubLayer" style={{zIndex: 118}}>
						<img alt=""
							data-isreversed="false"
							data-assetnormal="/images/roomAssets/blank.png"
							data-assetreverse="/images/roomAssets/blank.png"
							src="/images/roomAssets/blank.png" id="deskMirror" />
		      </div>
		      <div className="roomSubLayer" style={{zIndex: 119}}>
						<img alt=""
							data-isreversed="false"
							data-assetnormal="/images/roomAssets/blank.png"
							data-assetreverse="/images/roomAssets/blank.png"
							src="/images/roomAssets/blank.png" id="deskItem" />
		      </div>
	      </div>
	    	{/* Desk END */}

	    	{/* Shelf BEGIN */}
	      <div className="roomLayer" id="shelfBase" style={{zIndex: 120}}>
		      <div className="roomSubLayer" style={{zIndex: 120}}>
						<img alt=""
							data-isreversed="false"
							data-assetnormal="/images/roomAssets/blank.png"
							data-assetreverse="/images/roomAssets/blank.png"
							src="/images/roomAssets/blank.png" id="shelf" />
					</div>
		      <div className="roomSubLayer" style={{zIndex: 121}}>
						<img alt=""
							data-isreversed="false"
							data-assetnormal="/images/roomAssets/blank.png"
							data-assetreverse="/images/roomAssets/blank.png"
							src="/images/roomAssets/blank.png" id="shelfItem" />
		      </div>
	      </div>
	    	{/* Shelf END */}

	      <div className="roomLayer" style={{zIndex: 122}}>
					<img alt=""
						data-isreversed="false"
						data-assetnormal="/images/roomAssets/blank.png"
						data-assetreverse="/images/roomAssets/blank.png"
						src="/images/roomAssets/blank.png" id="bigPlant" />
	      </div>

	      <div className="roomLayer" style={{zIndex: 123}}>
					<img alt=""
						data-isreversed="false"
						data-assetnormal="/images/roomAssets/blank.png"
						data-assetreverse="/images/roomAssets/blank.png"
						src="/images/roomAssets/blank.png" id="catBed" />
	      </div>

	      <div className="roomLayer" style={{zIndex: 124}}>
					<img alt=""
						data-isreversed="false"
						data-assetnormal="/images/roomAssets/blank.png"
						data-assetreverse="/images/roomAssets/blank.png"
						src="/images/roomAssets/blank.png" id="poster" />
	      </div>

	      <div className="roomLayer" style={{zIndex: 125}}>
					<img alt=""
						data-isreversed="false"
						data-assetnormal="/images/roomAssets/blank.png"
						data-assetreverse="/images/roomAssets/blank.png"
						src="/images/roomAssets/blank.png" id="pictureFrame" />
	      </div>
	      
      </div>
    </>
	);
};

export default Room;