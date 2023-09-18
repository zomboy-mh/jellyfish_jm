<template>
	<view class="lv_bg">
		<view class="head_title">
			<view v-if="share" @tap="returnJump" class="head_title_left icon iconguanbi1 cl-white"></view>
			<view class=" head_title_center font-20 cl-white flex ">定级测评</view>
		</view>
		<view class="lv_bg_box">
			<image class="lv_bg_img" src="http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/bgSky1.png" mode=""></image>
		</view>
		<view class="rank_head">
			<image class="rank_head_left" :src="userHeadImg" mode=""></image>
			<view class="rank_head_right">
				<view class="rank_head_name cl-white font-bold font-16">
					{{gradeData.user_name}}
				</view>
				<view class="rank_head_date cl-white flex margin-top-10">
					<view class="margin-right-10">{{gradeData.age}}岁</view>
					<view>学习英语{{gradeData.learn_date}}</view>
				</view>
			</view>
		</view>
		<view class="rank_card">
			<image class="rank_cardimg" :src="imageUrl+'rank_cardimg.png'" mode=""></image>
			<view class="rank_card_box">
				<view class="rank_card_top font-bold">
					测评分析
				</view>
				<view class="rank_card_bottom">
					<view class="flex padding-right">
						<view class="cl-white">蓝思指数：</view>
						<view class="cl-white font-bold">{{levelData.Index_of_blue}}</view>
					</view>
					<view class="flex">
						<view class="cl-white">词汇：</view>
						<view class="cl-white font-bold">{{levelData.vocabulary}}</view>
					</view>
				</view>
			</view>

		</view>
		<view class="rank_cot">
			<!-- 阅读等级 -->
			<view class="rank_cot_box radius-18 bg-white position-r">
				<view class="position-a font-18 font-weight5">
					<view class="flex">
						<view>阅读计划：</view>
						<view class="cl-00A475 font-bold">Level {{levelData.study_level}}</view>
					</view>
				</view>
				<view class="flex justify-between align-end padding-top-10">
					<view class="list" v-for="(item,index) in itemList" :key="index">
						<view class="position-r">
							<image v-if="item.rank == levelData.study_level" class="long_img position-a"
								:src="imageUrl+'lv_long1.png'" mode=""></image>
							<view class="list_item"
								:style="{height:item.size+'rpx',background: index>rankIndex?'#E6E6E6': item.color}">
							</view>
						</view>
						<image class="list_img padding-top-10 margin-auto"
							:src="'http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/rank_'+item.rank+'.png'"
							mode="aspectFit"></image>
					</view>
				</view>
				<view class="flex justify-end padding-top-20 padding-bottom-12">
					<view class="flex justify-end font-17 font-weight5 cl-black2">
						<view class="text-right">
							<view>测试时长: {{gradeData.testtime}}</view>
						</view>
					</view>

				</view>
			</view>

		</view>
		<view class="rank">
			<view class="joint">
				<view class="joint1">
					<image class="joint1_img" :src="imageUrl+'joint.png'" mode=""></image>
				</view>
				<view class="joint2">
					<image class="joint2_img" :src="imageUrl+'joint.png'" mode=""></image>
				</view>
				<view class="joint3">
					<image class="joint3_img" :src="imageUrl+'joint.png'" mode=""></image>
				</view>
			</view>
			<view class="rank_cot1">
				<!-- 成绩分析 -->
				<view class="wh  radius-18 bg-white ">
					<view class="padding-18 position-r">
						<view @tap="zxCutFn" :class="zxCutIf?'iconzhongyingwenqiehuan1':'iconzhongyingwenqiehuan2'"
							class="position-a zx_cut iconWoff margin-top-20"></view>
						<!-- ==================================== -->
						<view class="bg-white margin-top-20">
							<!-- ==================================== -->
							<view class="position-a flex align-center" v-if="zxCutIf == false">
								<image class="rank_login" :src="imageUrl + 'logo.png'" mode=""></image>
								<view class="rank_text font-12 font-weight5 cl-black4">RAZ阅读营</view>
							</view>

							<view class="position-a flex align-center" v-if="zxCutIf == true">
								<image class="rank_login" :src="imageUrl + 'logo.png'" mode=""></image>
								<view class="rank_text font-12 font-weight5 cl-black4">Reading A-Z</view>
							</view>

							<view class="head text-center" v-if="zxCutIf == false">
								<view class="font-19 font-bold">学生定级报告</view>
								<view class="font-16 font-weight5 padding-bottom-10">定级测试</view>
							</view>
							<view class="head text-center" v-if="zxCutIf == true">
								<view class="font-19 font-bold">Student Diagnostic Report</view>
								<view class="font-16 font-weight5 padding-bottom-10">Grading Test</view>
							</view>

							<view class="flex justify-between font-12 font-weight5 cl-black2" v-if="zxCutIf == false">
								<view>学校:RAZ阅读营</view>
								<view class="text-right">
									<view>测试时间: {{gradeData.cnStartDate}} </view>
									<view>测试时长: {{gradeData.testtime}}</view>
								</view>
							</view>

							<view class="flex justify-between font-12 font-weight5 cl-black2" v-if="zxCutIf == true">
								<view>School:Reading A-Z</view>
								<view class="text-right">
									<view>Test Date: {{gradeData.startDate}}</view>
									<view>Test Time: {{gradeData.testtime}}</view>
								</view>
							</view>

							<view class="font-12 font-weight5 cl-black2" style="line-height: 14rpx;"
								v-if="zxCutIf == false">
								<text>报表选项 \n\n 使用趋势得分 : 使用最近的测试</text>
							</view>


							<view class="font-12 font-weight5 cl-black2" style="line-height: 14rpx;"
								v-if="zxCutIf == true">
								<text>Report Options \n\n Use Trend Score : Use most recent test</text>
							</view>


							<view class="font-15 font-bold padding-top-10" v-if="zxCutIf == false">
								{{gradeData.learn_date}}
							</view>
							<view class="font-15 font-bold padding-top-10" v-if="zxCutIf == true">
								{{gradeData.learn_date_en}}
							</view>

							<view class="flex font-12 font-weight5 cl-black4" v-if="zxCutIf == false">
								<view style="padding-right: 150rpx;"><text>学生名：{{gradeData.user_name}} \n
										年龄：{{gradeData.age}}</text></view>
								<view><text>班级：test \n 教师：T .teacher</text></view>
							</view>

							<view class="flex font-12 font-weight5 cl-black4" v-if="zxCutIf == true">
								<view style="padding-right: 150rpx;"><text>ID：{{gradeData.user_name}} \n
										age：{{gradeData.age}}</text></view>
								<view><text>Class：test \n Teacher：T .teacher</text></view>
							</view>


							<!-- 表格 -->
							<view class="table  margin-top-10">
								<view class="tab-bob" v-if="zxCutIf == false">
									<view class="font-12 cl-black4 font-bold">阅读等级-{{gradeData.study_level}}</view>
									<view class="table_exp flex justify-center">
										<view class="exp1 bg-E00000 height position-r">
											<view v-if="gradeData.english_level_en == 'Emerging'"
												class="place position-a height">
												<view class="icon1 position-a icontriangle"></view>
												<view class="place_x height bg-black"></view>
											</view>
										</view>
										<view class="exp2 bg-FFD600 height position-r">
											<view v-if="gradeData.english_level == '待提高'"
												class="place position-a height">
												<view class="icon1 position-a icontriangle"></view>
												<view class="place_x height bg-black"></view>
											</view>
										</view>
										<view class="exp3 bg-0061E3 height position-r">
											<view v-if="gradeData.english_level == '优秀'"
												class="place position-a height">
												<view class="icon1 position-a icontriangle"></view>
												<view class="place_x height bg-black"></view>
											</view>
										</view>
										<view class="exp4 bg-00AF46 height position-r">
											<view v-if="gradeData.english_level == '非常棒'"
												class="place position-a height">
												<view class="icon1 position-a icontriangle"></view>
												<view class="place_x height bg-black"></view>
											</view>
										</view>
									</view>
									<view class="flex justify-end padding-right-40 padding-bottom-10">
										<view class="flex align-center font-9">
											<view class="exp_bs bg-E00000"></view>
											<view>{{gradeData.english_level}}</view>
											<!-- <view v-if="gradeData.english_level_en == 'Emerging'">启蒙中</view> -->
										</view>
										<view class="flex align-center font-9 padding-lr-10">
											<view class="exp_bs bg-FFD600"></view>
											<view>待提高</view>
										</view>
										<view class="flex align-center font-9 padding-right-10">
											<view class="exp_bs bg-0061E3"></view>
											<view>优秀</view>
										</view>
										<view class="flex align-center font-9">
											<view class="exp_bs bg-00AF46"></view>
											<view>非常棒</view>
										</view>
									</view>
								</view>


								<view class="tab-bob" v-if="zxCutIf == true">
									<view class="font-12 cl-black4 font-bold">School
										Benchmark-{{gradeData.study_level}}</view>
									<view class="table_exp flex justify-center">
										<view class="exp1 bg-E00000 height position-r">
											<view v-if="gradeData.english_level_en == 'Emerging'"
												class="place position-a height">
												<view class="icon1 position-a icontriangle"></view>
												<view class="place_x height bg-black"></view>
											</view>
										</view>
										<view class="exp2 bg-FFD600 height position-r">
											<view v-if="gradeData.english_level_en == 'Progressing'"
												class="place position-a height">
												<view class="icon1 position-a icontriangle"></view>
												<view class="place_x height bg-black"></view>
											</view>
										</view>
										<view class="exp3 bg-0061E3 height position-r">
											<view v-if="gradeData.english_level_en == 'Accomplished'"
												class="place position-a height">
												<view class="icon1 position-a icontriangle"></view>
												<view class="place_x height bg-black"></view>
											</view>
										</view>
										<view class="exp4 bg-00AF46 height position-r">
											<view v-if="gradeData.english_level_en == 'Superior'"
												class="place position-a height">
												<view class="icon1 position-a icontriangle"></view>
												<view class="place_x height bg-black"></view>
											</view>
										</view>
									</view>
									<view class="flex justify-end padding-right-40 padding-bottom-10">
										<view class="flex align-center font-9">
											<view class="exp_bs bg-E00000"></view>
											<view>Emerging</view>
										</view>
										<view class="flex align-center font-9 padding-lr-10">
											<view class="exp_bs bg-FFD600"></view>
											<view>Progressing</view>
										</view>
										<view class="flex align-center font-9 padding-right-10">
											<view class="exp_bs bg-0061E3"></view>
											<view>Accomplished</view>
										</view>
										<view class="flex align-center font-9">
											<view class="exp_bs bg-00AF46"></view>
											<view>Superior</view>
										</view>
									</view>
								</view>

								<view class="tab-pad tab-bob font-12 font-bold" v-if="zxCutIf == true">RAZ Scores
								</view>
								<view class="tab-pad tab-bob font-12 font-bold" v-if="zxCutIf == false">RAZ 测试综合评分
								</view>


								<view class="tab-bob flex font-12 cl-black3 font-weight5" v-if="zxCutIf == true">
									<view class="tab-bor tab-pad tab-wdh flex-shrink">
										Lexile Measurement: {{gradeData.Index_of_blue}}
									</view>
									<view class="tab-pad">
										The Lexile measure is a scaled score converted to the equivalent Lexile
										measure.
									</view>
								</view>

								<view class="tab-bob flex font-12 cl-black3 font-weight5" v-if="zxCutIf == false">
									<view class="tab-bor tab-pad tab-wdh flex-shrink">
										蓝思指数: {{gradeData.Index_of_blue}}
									</view>
									<view class="tab-pad">
										蓝思指数是按对应的分数转化而得的数据。
									</view>
								</view>


								<view class="tab-bob flex font-12 cl-black3 font-weight5" v-if="zxCutIf == true">
									<view class="tab-bor tab-pad tab-wdh flex-shrink">
										<text>PR: {{gradeData.PR}} \n (Percentile Rank)</text>
									</view>
									<view class="tab-pad">
										{{gradeData.user_name}} scored greater than {{gradeData.PR}} of students
										nationally in the
										same test.
									</view>
								</view>
								<view class="tab-bob flex font-12 cl-black3 font-weight5" v-if="zxCutIf == false">
									<view class="tab-bor tab-pad tab-wdh flex-shrink">
										<text>排名: {{gradeData.PR}} \n (百分位数)</text>
									</view>
									<view class="tab-pad">
										{{gradeData.user_name}} 的分数优于全国参加这个测试 {{gradeData.PR}} 的学生。
									</view>
								</view>


								<view class="tab-bob flex font-12 cl-black3 font-weight5" v-if="zxCutIf == true">
									<view class="tab-bor tab-pad tab-wdh flex-shrink">
										<text>GE: {{gradeData.GE}} \n (Grade Equivalent)</text>
									</view>
									<view class="tab-pad">
										{{gradeData.user_name}}'s test performance is comparable to that of an
										average
										{{gradeData.GE_EN}} .
									</view>
								</view>
								<view class="tab-bob flex font-12 cl-black3 font-weight5" v-if="zxCutIf == false">
									<view class="tab-bor tab-pad tab-wdh flex-shrink">
										<text>同等级别: {{gradeData.GE}} \n (同等级别)</text>
									</view>
									<view class="tab-pad">
										{{gradeData.user_name}}的测试表现相当于{{gradeData.GE}}的平均水平。
									</view>
								</view>

								<view class="tab-bob flex font-12 cl-black3 font-weight5" v-if="zxCutIf == true">
									<view class="tab-bor tab-pad tab-wdh flex-shrink">
										<text>IRL: {{levelData.study_level}} \n (Instructional Reading Level)</text>
									</view>
									<view class="tab-pad">
										{{gradeData.user_name}}would be best served by instructional reading
										materials of Level {{levelData.study_level}}
									</view>
								</view>


								<view class="tab-bob flex font-12 cl-black3 font-weight5" v-if="zxCutIf == false">
									<view class="tab-bor tab-pad tab-wdh flex-shrink">
										<text>定级测评水平: {{levelData.study_level}} \n </text>
									</view>
									<view class="tab-pad">
										{{gradeData.user_name}}的定级测试水平是 {{levelData.study_level}}级别
									</view>
								</view>


								<view v-if="zxCutIf == true">
									<view class="tab-pad tab-bob font-12 font-bold">Listening level</view>
									<view class="tab-bob flex font-12 cl-black3 font-weight5">
										<view class="tab-bor tab-pad tab-wdh flex-shrink">
											<text>test：{{gradeData.listeningScore}} \n (Total score：{{gradeData.hearing_points}})</text>
										</view>
										<view class="tab-pad">{{gradeData.hearing_standard_en}}</view>
									</view>

									<view class="tab-pad tab-bob font-12 font-bold">Reading level</view>
									<view class="flex font-12 cl-black3 font-weight5">
										<view class="tab-bor tab-pad tab-wdh flex-shrink">
											<text>test：{{gradeData.readingScore}} \n (Total score：{{gradeData.read_points}})</text>
										</view>
										<view class="tab-pad">{{gradeData.read_standard_en}}</view>
									</view>
								</view>

								<view v-if="zxCutIf == false">
									<view class="tab-pad tab-bob font-12 font-bold">听力水平</view>
									<view class="tab-bob flex font-12 cl-black3 font-weight5">
										<view class="tab-bor tab-pad tab-wdh flex-shrink">
											<text>测试得分：{{gradeData.listeningScore}}\n（总分{{gradeData.hearing_points}})</text>
										</view>
										<view class="tab-pad">{{gradeData.hearing_standard}}</view>
									</view>

									<view class="tab-pad tab-bob font-12 font-bold">阅读水平</view>
									<view class="flex font-12 cl-black3 font-weight5">
										<view class="tab-bor tab-pad tab-wdh flex-shrink">
											<text>测试得分：{{gradeData.readingScore}} \n（总分{{gradeData.read_points}})</text>
										</view>
										<view class="tab-pad">{{gradeData.read_standard}}</view>
									</view>
								</view>


							</view>
							<!-- Benchmark Scores表格 -->
							<view class="font-12 font-bold padding-top-10" v-if="zxCutIf == true">Benchmark Scores
							</view>
							<view class="font-11 cl-black3 font-weight5" v-if="zxCutIf == true">
								Benchmark test provides a three-part assessment process (Reading, Retelling and
								Quick Check Quiz) to help you monitor students’ reading progress.
							</view>


							<view class="scores_table border-ADADAD" v-if="zxCutIf == true">
								<view class="tab-pad tab-bob font-12 font-bold">Part 1: Reading</view>
								<view class="flex font-12 cl-black3 font-weight6 tab-bob">
									<view class="st_lower tab-pad tab-bor flex-shrink">Errors</view>
									<view class="st_lower tab-pad tab-bor flex-shrink">Score</view>
									<view class="st_lower tab-pad">Error Rate/Accuracy</view>
								</view>
								<view class="flex font-12 cl-black3 font-weight5 tab-bob">
									<view class="st_lower tab-pad-lr tab-bor flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">Omissions</view>
										<view class="text-center tab-pad-tb flex-1">{{gradeData.reading.omissions}}
										</view>
									</view>
									<view class="st_lower tab-pad-lr tab-bor flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">Scored word count
										</view>
										<view class="text-center tab-pad-tb flex-1">
											{{gradeData.reading.scoreWordCount}}
										</view>
									</view>
									<view class="st_lower tab-pad-lr flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">Repetitions</view>
										<view class="text-center tab-pad-tb flex-1">
											{{gradeData.reading.repetitions}}
										</view>
									</view>
								</view>
								<view class="flex font-12 cl-black3 font-weight5 tab-bob">
									<view class="st_lower tab-pad-lr tab-bor flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">Insertions</view>
										<view class="text-center tab-pad-tb flex-1">{{gradeData.reading.insertions}}
										</view>
									</view>
									<view class="st_lower tab-pad-lr tab-bor flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">Scored duration
										</view>
										<view class="text-center tab-pad-tb flex-1">
											{{gradeData.reading.scoredDuration}}
										</view>
									</view>
									<view class="st_lower tab-pad-lr flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">Self Corrrections
										</view>
										<view class="text-center tab-pad-tb flex-1">
											{{gradeData.reading.selfCorrrections}}
										</view>
									</view>
								</view>
								<view class="flex font-12 cl-black3 font-weight5 tab-bob">
									<view class="st_lower tab-pad-lr tab-bor flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">Mispronunciations
										</view>
										<view class="text-center tab-pad-tb flex-1">
											{{gradeData.reading.mispronunciations}}
										</view>
									</view>
									<view class="st_lower tab-pad-lr tab-bor flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">WPM</view>
										<view class="text-center tab-pad-tb flex-1">{{gradeData.reading.WPM}}</view>
									</view>
									<view class="st_lower tab-pad-lr flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">SC Rate</view>
										<view class="text-center tab-pad-tb flex-1">{{gradeData.reading.SCRate}}
										</view>
									</view>
								</view>
								<view class="flex font-12 cl-black3 font-weight5 tab-bob">
									<view class="st_lower tab-pad-lr tab-bor flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">Substitutions
										</view>
										<view class="text-center tab-pad-tb flex-1">
											{{gradeData.reading.substitutions}}
										</view>
									</view>
									<view class="st_lower tab-pad-lr tab-bor flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">WCPM</view>
										<view class="text-center tab-pad-tb flex-1">{{gradeData.reading.WCPM}}
										</view>
									</view>
									<view class="st_lower tab-pad-lr flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">Accuracy</view>
										<view class="text-center tab-pad-tb flex-1">{{gradeData.reading.accuracy}}
										</view>
									</view>
								</view>
								<view class="tab-pad tab-bob font-12 font-bold">Part 2: Retelling(0 = Inaccurate or
									not included 1 = Fragmentary 2 = Partial 3 = Complete)</view>
								<!-- <view style="padding: 3rpx 4rpx;" class="tab-bob font-11 font-weight6">Fiction</view> -->
								<view style="display:flex; font-12">
									<view class=" font-12 cl-black3 font-weight5 ">
										<view class="tab-pad-lr tab-pad1 tab-bor flex-shrink tab-bob"
											v-for="(value,index) in gradeData.leftlist" :key="index">{{value}}
										</view>
									</view>
									<view class=" font-12">
										<view class="tab-pad-lr tab-pad2 tab-bor flex-shrink tab-bob"
											v-for="(value,index) in gradeData.centerlist" :key="index">{{value}}
										</view>
									</view>
									<view class=" font-12 cl-black3 font-weight5 ">
										<view class=" tab-pad3 flex-shrink tab-bob"
											v-for="(val,index) in gradeData.rightlist" :key="index">{{val}}</view>
									</view>
								</view>
								<view class="tab-pad tab-bob font-12 font-bold">Part 3: Quiz</view>
								<view class="part3_box flex font-12 cl-black3 font-weight5 tab-bob">
									<view class="part3_left font-12">
										<view class="part3_ble tab-bor flex-shrink tab-bob"
											v-for="(value,index) in gradeData.quizLeftlist" :key="index">{{value}}
										</view>
									</view>
									<view class="part3_right font-12 cl-black3 font-weight5 ">
										<view class=" part3_ble1 flex-shrink tab-bob"
											v-for="(val,index) in gradeData.quizRightlist" :key="index">
											<image class="wh match_img" v-if="!val" :src="imageUrl + 'tzCha.png'"
												mode="aspectFit"></image>
											<image class="wh match_img" v-if="val" :src="imageUrl + 'tzGou.png'"
												mode="aspectFit"></image>
										</view>
									</view>
								</view>
							</view>


							<view class="font-12 font-bold padding-top-10" v-if="zxCutIf == false">阶段性测试得分</view>
							<view class="font-11 cl-black3 font-weight5" v-if="zxCutIf == false">
								阶段性测试通过朗读，复述及阅读理解三方面考察学生的阅读水平发展。
							</view>
							<view class="scores_table border-ADADAD" v-if="zxCutIf == false">
								<view class="tab-pad tab-bob font-12 font-bold">第一部分：朗读(学生朗读文章内容并录音,系统会根据以下项自动打分)
								</view>
								<view class="flex font-12 cl-black3 font-weight6 tab-bob">
									<view class="st_lower tab-pad tab-bor flex-shrink">错误项</view>
									<view class="st_lower tab-pad tab-bor flex-shrink">正确率</view>
									<view class="st_lower tab-pad">错误/正确率</view>
								</view>
								<view class="flex font-12 cl-black3 font-weight5 tab-bob">
									<view class="st_lower tab-pad-lr tab-bor flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">漏读单词数</view>
										<view class="text-center tab-pad-tb flex-1">{{gradeData.reading.omissions}}
										</view>
									</view>
									<view class="st_lower tab-pad-lr tab-bor flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">得分单词数
										</view>
										<view class="text-center tab-pad-tb flex-1">
											{{gradeData.reading.scoreWordCount}}
										</view>
									</view>
									<view class="st_lower tab-pad-lr flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">重复朗读单词数</view>
										<view class="text-center tab-pad-tb flex-1">
											{{gradeData.reading.repetitions}}
										</view>
									</view>
								</view>
								<view class="flex font-12 cl-black3 font-weight5 tab-bob">
									<view class="st_lower tab-pad-lr tab-bor flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">插入单词数</view>
										<view class="text-center tab-pad-tb flex-1">{{gradeData.reading.insertions}}
										</view>
									</view>
									<view class="st_lower tab-pad-lr tab-bor flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">得分朗读时间</view>
										<view class="text-center tab-pad-tb flex-1">
											{{gradeData.reading.scoredDuration}}
										</view>
									</view>
									<view class="st_lower tab-pad-lr flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">自我纠正单词数
										</view>
										<view class="text-center tab-pad-tb flex-1">
											{{gradeData.reading.selfCorrrections}}
										</view>
									</view>
								</view>
								<view class="flex font-12 cl-black3 font-weight5 tab-bob">
									<view class="st_lower tab-pad-lr tab-bor flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">错误发音单词数
										</view>
										<view class="text-center tab-pad-tb flex-1">
											{{gradeData.reading.mispronunciations}}
										</view>
									</view>
									<view class="st_lower tab-pad-lr tab-bor flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">每分钟阅读单词数</view>
										<view class="text-center tab-pad-tb flex-1">{{gradeData.reading.WPM}}</view>
									</view>
									<view class="st_lower tab-pad-lr flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">自我纠正率</view>
										<view class="text-center tab-pad-tb flex-1">{{gradeData.reading.SCRate}}
										</view>
									</view>
								</view>
								<view class="flex font-12 cl-black3 font-weight5 tab-bob">
									<view class="st_lower tab-pad-lr tab-bor flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">自行替换单词数</view>
										<view class="text-center tab-pad-tb flex-1">
											{{gradeData.reading.substitutions}}
										</view>
									</view>
									<view class="st_lower tab-pad-lr tab-bor flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">每分钟朗读正确单词数</view>
										<view class="text-center tab-pad-tb flex-1">{{gradeData.reading.WCPM}}
										</view>
									</view>
									<view class="st_lower tab-pad-lr flex flex-shrink">
										<view class="st_lower_ble tab-pad-tb tab-bor flex-shrink">正确率</view>
										<view class="text-center tab-pad-tb flex-1">{{gradeData.reading.accuracy}}
										</view>
									</view>
								</view>
								<view class="tab-pad tab-bob font-12 font-bold">
									第二部分：复述(学生完成第一部分朗读后，根据提示页的要点，复述内容　0=不正确或未提及　1=回答过于简单　2=回答不完整　3=回答完整)</view>
								<!-- <view style="padding: 3rpx 4rpx;" class="tab-bob font-11 font-weight6">复述</view> -->
								<view style="display:flex; font-12">
									<view class=" font-12 cl-black3 font-weight5 ">
										<view class=" tab-pad1 tab-bor flex-shrink tab-bob"
											v-for="(value,index) in gradeData.cnLeftList" :key="index">{{value}}
										</view>
									</view>
									<view class="font-12">
										<view class=" tab-pad2 tab-bor flex-shrink tab-bob"
											v-for="(value,index) in gradeData.cnCenter" :key="index">{{value}}
										</view>
									</view>
									<view class=" font-12 cl-black3 font-weight5 ">
										<view class=" tab-pad3 flex-shrink tab-bob"
											v-for="(val,index) in gradeData.rightlist" :key="index">{{val}}</view>
									</view>
								</view>


								<view class="tab-pad tab-bob font-12 font-bold">第三部分: 阅读理解({{Bmtext}})</view>
								<view class="part3_box flex font-12 cl-black3 font-weight5 tab-bob">
									<view class="part3_left font-12">
										<view class="part3_ble tab-bor flex-shrink tab-bob"
											v-for="(value,index) in gradeData.quizLeftlist" :key="index">{{value}}
										</view>
									</view>
									<view class="part3_right font-12 cl-black3 font-weight5 ">
										<view class=" part3_ble1 flex-shrink tab-bob"
											v-for="(val,index) in gradeData.quizRightlist" :key="index">
											<image class="wh match_img" v-if="!val" :src="imageUrl + 'tzCha.png'"
												mode="aspectFit"></image>
											<image class="wh match_img" v-if="val" :src="imageUrl + 'tzGou.png'"
												mode="aspectFit"></image>
										</view>
									</view>
								</view>

							</view>
						</view>
					</view>
					<!-- ========================================； -->
				</view>
			</view>
			<view class="rank_cot2">
				<view class="rank_cot2_title">阅读能力提升</view>
				<view class="rank_cot2_text">根据你的测评结果分析，RAZ阅读营老师为你制定了一套阅读提升方案。通过听说读练以及课后闯关赛和阶段性升级测试，帮助你提高综合英语阅读能力！
				</view>
			</view>
			<view class="share_btn">
				<view class="share_btn1" @tap="sharebtn">
					<image class="sharebuttom_img1" :src="imageUrl + 'share_home.png'" mode=""></image>
					<view class="font-18 cl-white">返回首页</view>
				</view>
				<view class="share_btn2" @tap="sharepyq = true">
					<image class="sharebuttom_img2" :src="imageUrl + 'share_pyq.png'" mode=""></image>
					<view class="font-18 cl-white">分享朋友圈</view>
				</view>
				<button class="share_btn3" open-type="share" style=" background-color: transparent;outline: none;">
					<image class="sharebuttom_img3" :src="imageUrl + 'share_wx.png'" mode=""></image>
					<view class="font-18 cl-white">分享好友</view>
				</button>
				<!-- <view class="share_btn3">
					<image class="sharebuttom_img3" :src="imageUrl + 'share_wx.png'" mode=""></image>
					<view class="font-20 cl-white">分享好友</view>
				</view> -->
			</view>
		</view>
		<view class="zhezhaoceng" v-if="sharepyq">
			<view class="zhezhaocengBa" @tap="sharepyq = false"></view>
			<image class="sharepyq" :src="imageUrl+'sharepyq1.png'" mode=""></image>

		</view>
		<!-- <button class="sharebuttom" v-if="share" open-type="share" style="border: 0 none; background-color: transparent;outline: none;">
			<image class="sharebuttom_img" :src="imageUrl + 'bottomimg5.png'" mode=""></image>
		</button> -->
		<button class="sharebuttom" v-if="!share" @tap="sharebtn">
			<image class="sharebuttom_img" :src="imageUrl + 'bottomimg6.png'" mode=""></image>
		</button>
		<!-- <view class="share" v-if="share" @tap="ifshare">
			<button open-type="share" style="border: 0 none; background-color: transparent;outline: none;">
				<image class="share_img" :src="imageUrl+'test_share.png'" mode=""></image>
			</button> -->
		<!-- <image class="share_img" :src="imageUrl+'test_share.png'" mode=""></image> -->
		<!-- </view> -->
		<view class="zhezhaoceng" v-if="ifcoupons">
			<view class="zhezhaocengBa" @tap="ifcoupons = false"></view>
			<view class="coupons">
				<view class="coupons_box">
					<image @tap="coupons_close" class="iconguanbi2" :src="imageUrl + 'close.png'" mode="">
					</image>
					<image class="coupons_bg" :src="imageUrl+'coupons_bg.png'" mode=""></image>
					<view class="coupons_btn" @tap="generate">
						{{coupons_txt}}
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {getAssessReport} from '../../../api/index.js'
	import {imageUrl,formalUrl} from '../../../config/index.js'
	// import store from "@/store/index.js";
	// import cookie from "@/utils/store/cookie";
	export default {
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				Bmtext: '学生根据所读内容，完成阅读理解选择题',
				cutType: 1,
				zxCutIf: true,
				rankIndex: 0,
				levelData: {
					Index_of_blue: '',
					study_level: '',
					vocabulary: 0
				},
				userHeadImg: 'https://readrsc.oss-cn-hangzhou.aliyuncs.com/read61v2_rsc/DEFT_IMG/wx/APP-logo.png',
				gradeData: {},
				itemList: [{
					size: '18',
					rank: 'aa',
					color: '#FE9288'
				}, {
					size: '27',
					rank: 'A',
					color: '#F86A96'
				}, {
					size: '36',
					rank: 'B',
					color: '#F6666E'
				}, {
					size: '45',
					rank: 'C',
					color: '#F09D40'
				}, {
					size: '54',
					rank: 'D',
					color: '#F6C844'
				}, {
					size: '64',
					rank: 'E',
					color: '#C4E348'
				}, {
					size: '73',
					rank: 'F',
					color: '#AEE486'
				}, {
					size: '82',
					rank: 'G',
					color: '#7FCF64'
				}, {
					size: '91',
					rank: 'H',
					color: '#52A67E'
				}, {
					size: '100',
					rank: 'I',
					color: '#6BB7B5'
				}, {
					size: '110',
					rank: 'J',
					color: '#51A9DF'
				}, {
					size: '119',
					rank: 'K',
					color: '#3288C2'
				}, {
					size: '128',
					rank: 'L',
					color: '#B87FE8'
				}, {
					size: '137',
					rank: 'M',
					color: '#9860D7'
				}, {
					size: '146',
					rank: 'N',
					color: '#7A5CE8'
				}],
				userId: 0,
				share: true,
				ifcoupons: false,
				coupons_txt: '立即领取',
				sharepyq: false, //分享朋友圈提示
				shareif: false , //是否是分享页面
				parmas:{},
				appraisalId:0
			}
		},
		onLoad(open) {
			// this.ifshare();
			// if (open.shareId) {
			// 	this.parmas = JSON.parse(open.shareId);
			// 	this.token = cookie.get('login_status');
			// 	console.log("token",this.token)
			// 	if(this.parmas.recordId){
			// 		this.recordId = this.parmas.recordId;
			// 		this.share = false;
			// 		this.shareif = true;
			// 		this.getUserExaminationDetailUrl(this.parmas.appraisal_id,this.parmas.type,this.parmas.recordId)
			// 	}else if(this.parmas.userId){
			// 		this.queryExaminationReportByUserIdUrl(this.parmas.userId)
			// 	}
			// } else if(open.data!=null) {
			// 		this.parmas = JSON.parse(open.data)
			// 		this.token = cookie.get('login_status');
			// 		console.log("token",this.token)
			// 		this.getUserExaminationDetailUrl(this.parmas.appraisal_id,this.parmas.type,0)
			// }else{
			// 	this.queryExaminationReportUrl();
			// }
			// this.appraisalId = uni.getStorageSync('appraisalId');
			this.appraisalId = 2081;
				this.queryExaminationReportUrl();
			// this.queryExaminationReportUrl();
		},

		onShow() {

		},
		onShareAppMessage(res) {
			setTimeout(() => {
				if (!this.shareif) {
					this.ifcoupons = true;
				}
			}, 2000)
			return {

				title: '我的英语能力测评报告',
				path: '/pages/checkout/rankReport?shareId='  +JSON.stringify(this.parmas),

			}

		},
		onShareTimeline() {
			setTimeout(() => {
				if (!this.shareif) {
					this.ifcoupons = true;
				}
			}, 2000)
			return {
				title: '我的英语能力测评报告',
				query: 'shareId='  +JSON.stringify(this.parmas),
			}
		},

		methods: {
			generates() {
				// this.ifcoupons = false;
				let view = uni.createSelectorQuery().in(this);
				view.select('#myCanvas').boundingClientRect(response => {
					
				}).exec();
				let images = this.imageUrl + 'coupons_bg.png';
				uni.getImageInfo({
					src: images,
					success: (response) => {
						console.log("图片2", response)
						const canvas = uni.createCanvasContext('myCanvas', this);
						const windowWidth = wx.getSystemInfoSync().windowWidth;

						canvas.clearRect(0, 0, windowWidth, 300);
						canvas.drawImage(response.path, 0, 0, 300, 150);
						canvas.fillText('长按识别二维码', 20, 20)
						canvas.draw();

					}
				})

			},
			generates1() {
				uni.showModal({
					title: '提示',
					content: '确定保存到相册吗',
					success: (response) => {
						uni.canvasToTempFilePath({
							x: 0,
							y: 0,
							height: 300,
							width: 300,
							canvasId: 'myCanvas',
							success: (response) => {
								uni.saveImageToPhotosAlbum({
									filePath: response.tempFilePath,
									success: (response) => {
										console.log(response);
									},
									fail: (response) => {
										uni.openSetting({
											success: (response) => {
												if (!response.authSetting[
														'scope.writePhotosAlbum'
													]) {
													nui.showModal({
														title: '提示',
														content: '获取权限成功，再次点击图片即可保存',
														showCancel: false
													})
												} else {
													nui.showModal({
														title: '提示',
														content: '获取权限失败，无法保存',
														showCancel: false
													})
												}
											}
										})
									}
								})
							},
							fail: (response) => {
								console.log(response);
							}
						}, this);
					}
				})
			},
			generate() {
				if (this.coupons_txt == '立即使用') {
					uni.redirectTo({
						url: '/pages/checkout/planDetail?buys1=' + 0,
					})
				} else {
					receiveCoupon({
						type: 1,
					}).then(res => {
						if (res.status == 200) {
							this.coupons_txt = '立即使用'
							return
						} else {
							this.coupons_txt = '立即使用'
						}
					})
				}

			},
			coupons_close() {
				this.ifcoupons = false
			},
			queryExaminationReportUrl() {
				getAssessReport({
					'appraisalId':this.appraisalId
				}).then(res => {
					console.log("获取报告",res)
					if (res.status == 200) {
						
						this.levelData.Index_of_blue = res.data.Index_of_blue;
						this.levelData.study_level = res.data.study_level;
						this.levelData.vocabulary = res.data.vocabulary;
						this.recordId = res.data.userId;
						this.parmas.userId = this.recordId;
						this.userHeadImg = res.data.userHeadImg;
						this.gradeData = res.data;
						if (this.gradeData.quizLeftlist.length < 1) {
							this.Bmtext = '该级别较低，没有阅读理解测试部分'
						}
						this.itemList.map((item, index) => {
							if (item.rank == res.data.study_level) {
								this.rankIndex = index;
							}
						})
					}
				})
			},
			getUserExaminationDetailUrl(id,type,userid) {
				getUserExaminationDetail({
					appraisal_id:id,
					type:type,
					userId: userid
				}).then(res => {
					if (res.status == 200) {
						this.levelData.Index_of_blue = res.data.Index_of_blue;
						this.levelData.study_level = res.data.study_level;
						this.levelData.vocabulary = res.data.vocabulary;
						this.recordId = res.data.userId;
						this.parmas.recordId = this.recordId;
						this.userHeadImg = res.data.userHeadImg;
						this.gradeData = res.data;
						if (this.gradeData.quizLeftlist.length < 1) {
							this.Bmtext = '该级别较低，没有阅读理解测试部分'
						}
						this.itemList.map((item, index) => {
							if (item.rank == res.data.study_level) {
								this.rankIndex = index;
							}
						})
					}
				})
			},
			ifshare() {
				
				isReceiveCoupon({
					'type': 1
				}).then(res => {
					if (!res.data) {

					} else {
						this.coupons_txt = '立即使用'
					}
				})


			},
			queryExaminationReportByUserIdUrl(data) {
				queryExaminationReportByUserId({
					userId: data
				}).then(res => {
					if (res.status == 200) {
						this.levelData.Index_of_blue = res.data.Index_of_blue;
						this.levelData.study_level = res.data.study_level;
						this.levelData.vocabulary = res.data.vocabulary;
						this.userHeadImg = res.data.userHeadImg;
						this.gradeData = res.data;
						if (this.gradeData.quizLeftlist.length < 1) {
							this.Bmtext = '该级别较低，没有阅读理解测试部分'
						}
						this.itemList.map((item, index) => {
							if (item.rank == res.data.study_level) {
								this.rankIndex = index;
							}
						})
					}
				})
			},
			// 切换
			zxCutFn() {
				this.zxCutIf = !this.zxCutIf;

			},
			cutTypeFn(type) {
				this.cutType = type;
			},
			//分享人进入登陆界面
			sharebtn() {
				if (this.share) {
					this.returnJump()
				} else {
					uni.reLaunch({
						url: '/pages/authorization/index'
					})
				}

			},
			returnJump() {
				console.log("sss")
				uni.navigateTo({
					url: '../../index/index'
				})
				
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.select {
		position: absolute;
		left: 200rpx;
		top: 50rpx;
		width: 300rpx;
		height: 300rpx;

		.generates {
			width: 100rpx;
			height: 20rpx;
			font-size: 16rpx;

		}

		canvas {
			position: absolute;
			left: 60rpx;
			top: 0;
			// background: skyblue;
			width: 400rpx;
			height: 600rpx;
			overflow: auto;
		}
	}

	.zx_cut {
		right: 20rpx;
		font-size: 35rpx;
	}

	button::after {
		border: none;
	}

	.part3_box {
		.part3_left {
			.part3_ble {
				// width: 100%;
				height: 60rpx;
				width: 560rpx;
				padding: 6rpx 3rpx;
				box-sizing: border-box;
				display: flex;
				-webkit-align-items: center;

			}
		}

		.part3_right {
			.part3_ble1 {

				width: 88rpx;
				height: 60rpx;
				padding: 8rpx 30rpx 8rpx 30rpx;
				display: flex;
				-webkit-align-items: center;
				box-sizing: border-box;
			}

		}

	}

	.part2 {
		.part2_ble1 {
			width: 100%;
			height: 40rpx;
		}

		.part2_ble2 {
			width: 100%;
			height: 40rpx;
		}
	}

	.scores_table {
		margin-top: 7rpx;

		.st_lower {
			width: 32%;

			.st_lower_ble {
				width: 70%;
			}
		}
	}

	.bg-white1 {
		background: rgba(255, 255, 255, 0.7);
	}

	.table {
		box-sizing: border-box;
		border: 1px solid #ADADAD !important;
		// width: 666rpx;

		.table_exp {
			margin: 14rpx 0 9rpx;
			height: 37rpx;

			.exp1 {
				width: 329rpx;
			}

			.exp2 {
				width: 137rpx;
			}

			.exp3 {
				width: 27rpx;
			}

			.exp4 {
				width: 55rpx;
			}
		}

		.exp_bs {
			margin-right: 4rpx;
			width: 10rpx;
			height: 10rpx;
		}
	}

	.place {
		right: 40%;

		.icontriangle {
			top: -12rpx;
			left: -6rpx;
		}

		.place_x {
			width: 3rpx;
		}
	}

	.rank_login {
		width: 52rpx;
		height: 32rpx;
	}

	.rank_text {
		width: 100rpx;
		line-height: 12rpx;
		padding-left: 6rpx;
	}

	.head {
		border-bottom: 2rpx solid #333333;
	}

	.tab-pad1 {

		width: 100rpx;
		height: 65rpx;
		padding: 6rpx 0;
		box-sizing: border-box;
		display: flex;
		-webkit-align-items: center;
	}

	.tab-pad3 {

		width: 76rpx;
		padding: 6rpx 28rpx;
		height: 65rpx;
		box-sizing: border-box;
		display: flex;
		-webkit-align-items: center;
		text-align: center;
	}

	.tab-pad2 {
		width: 470rpx;
		padding: 6rpx 3rpx;
		height: 65rpx;
		display: flex;
		-webkit-align-items: center;
		// vertical-align: middle;
		// display: table-cell;
		box-sizing: border-box;
	}

	.tab-pad {
		// padding: 6rpx 6rpx;
	}

	.tab-pad-tb {
		padding: 6rpx 0;
	}

	.tab-pad-lr {
		padding: 0 4rpx;
	}

	.tab-bob {
		border-bottom: 1rpx solid #ADADAD;
	}

	.tab-bor {
		border-right: 1rpx solid #ADADAD;

	}

	.tab-bol {
		border-left: 1rpx solid #ADADAD;

	}

	.tab-wdh {
		width: 194rpx;
	}

	.list {
		.long_img {
			top: -28rpx;
			width: 40rpx;
			height: 37rpx;
		}

		.list_item {
			width: 26rpx;
			border-radius: 10rpx;
		}

		.list_img {
			width: 13rpx;
			height: 16rpx;
		}
	}

	.rank_cot {
		width: 693rpx;
		height: 285rpx;
		border: 6rpx #6B80F4 solid;
		border-radius: 20rpx;
		box-sizing: border-box;
		margin-bottom: 30rpx;
		z-index: 2;
		position: relative;
		left: 0;
		top: -18rpx;
		margin: 0 30rpx;
		background: #272db6;
		.rank_cot_box {
			padding: 20rpx;
			padding-bottom: 29rpx;
		}

		.share {
			position: absolute;
			right: 50rpx;
			bottom: 20rpx;
			animation: bodong 5s infinite;
			animation-iteration-count: 1;

			.share_img {
				width: 80rpx;
				height: 68rpx;
			}
		}

		@keyframes bodong {
			0% {
				transform: translate(-600rpx, 0);
			}

			50% {
				transform: translate(-300rpx, -270rpx);

			}

			100% {
				transform: translate(0, 0);

			}


		}

		.coupon_cav {
			position: absolute;
			left: 20%;
			top: 20%;
			width: 400rpx;
			height: 300rpx;
			background: red;
		}




	}

	.rank {

		.joint {
			position: relative;
			z-index: 10;

			.joint1 {
				position: absolute;
				left: 30rpx;
				top: -44rpx;
				z-index: 10;

				.joint1_img {
					width: 20rpx;
					height: 80rpx;
				}
			}

			.joint2 {
				position: absolute;
				left: 65rpx;
				top: -44rpx;
				z-index: 10;

				.joint2_img {
					width: 20rpx;
					height: 80rpx;
				}
			}

			.joint3 {
				position: absolute;
				right: 30rpx;
				top: -44rpx;
				z-index: 10;

				.joint3_img {
					width: 20rpx;
					height: 80rpx;
				}
			}
		}

		position: relative;
		margin: auto;
		margin-top: 5rpx;
		width: 670rpx;
		// width: 100%;
		padding: 0 41rpx;
		padding-bottom: 120rpx;
		z-index: 2;
		background: #272db6;

		.rank_cut {
			left: 60%;

			.cut_type1 {
				width: 84rpx;
				height: 29rpx;
				line-height: 29rpx;
				background: #FFFFFF;
				font-size: 16rpx;
				font-family: PingFang SC;
				font-weight: 600;
				color: #0D79DE;
				border-radius: 8rpx 8rpx 0 0;
			}

			.cut_type2 {
				width: 75rpx;
				height: 25rpx;
				line-height: 25rpx;
				background: #A3CCF3;
				font-size: 14rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
				border-radius: 8rpx 8rpx 0 0;
			}
		}



		.rank_cot1 {
			border: 6rpx #6B80F4 solid;
			border-radius: 20rpx;
			box-sizing: border-box;
			z-index: 1;
			width: 100%;
			height: 100%;
			background: #272db6;


			.coupon_cav {
				position: absolute;
				left: 20%;
				top: 20%;
				width: 400rpx;
				height: 300rpx;
				background: red;
			}

			.coupons {
				position: absolute;
				left: 50%;
				top: 50%;
				margin-left: -150rpx;
				margin-top: -75rpx;

				.coupons_box {
					position: relative;
					left: 0;
					top: 0;

					.coupons_bg {
						width: 300rpx;
						height: 150rpx;
					}

					.coupons_btn {
						width: 120rpx;
						height: 24rpx;
						background: #F8F2E2;
						color: #EB2534;
						position: absolute;
						left: 50%;
						margin-left: -60rpx;
						bottom: 14rpx;
						font-size: 17rpx;
						font-weight: bold;
						text-align: center;
						line-height: 24rpx;
						border-radius: 5rpx;
					}
				}

			}
		}

		.rank_cot2 {
			border: 6rpx #6B80F4 solid;
			background: #FFFFFF;
			border-radius: 20rpx;
			margin-top: 20rpx;
			box-sizing: border-box;

			.rank_cot2_title {
				width: 100%;
				height: 20rpx;
				// display: flex;
				font-size: 20rpx;
				font-weight: bold;
				text-align: center;
				justify-content: center;
				margin-top: 10rpx;
				margin-bottom: 10rpx;
			}

			.rank_cot2_text {
				width: 86%;
				margin: 10rpx auto;
				padding: 5rpx 30rpx;
				font-size: 15rpx;
				// height: 20rpx;
				// display: flex;
				// text-align: center;
				// justify-content: center;
			}
		}

		.share_btn {
			width: 100%;
			height: 40rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 30rpx;

			.share_btn1 {
				width: 26%;
				height: 50%;
				padding: 15rpx;
				margin-right: 5%;
				border: 2rpx #FFFFFF solid;
				border-radius: 30rpx;
				display: flex;
				justify-content: center;
				align-items: center;

				.sharebuttom_img1 {
					width: 30rpx;
					height: 30rpx;
					margin-right: 15rpx;
				}
			}

			.share_btn2 {
				width: 26%;
				height: 50%;
				
				padding: 15rpx;
				margin-right: 5%;
				border: 2rpx #FFFFFF solid;
				border-radius: 30rpx;
				display: flex;
				justify-content: center;
				align-items: center;

				.sharebuttom_img2 {
					width: 30rpx;
					height: 30rpx;
					margin-right: 15rpx;
				}
			}

			.share_btn3 {
				width: 26%;
				height: 130%;
				padding: 15rpx;
				border: 2rpx #FFFFFF solid;
				border-radius: 30rpx;
				display: flex;
				justify-content: center;
				align-items: center;

				.sharebuttom_img3 {
					width: 30rpx;
					height: 30rpx;
					margin-right: 15rpx;
				}
			}

		}
	}

	.iconguanbi1 {
		font-size: 32rpx;
		top: 12rpx;
		left: 30rpx;
	}

	.iconguanbi2 {
		position: absolute;
		top: -25rpx;
		right: -25rpx;
		font-size: 40rpx;
		width: 50rpx;
		height: 50rpx;
	}

	.lv_bg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		 overflow-x: hidden;
		// background: #272db6;
		// background: url('http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/bgSky1.png');
		// background-repeat: no-repeat;
		// background-size: 100% 1059rpx;
		.sharebuttom {
			position: fixed;
			bottom: -20rpx;
			width: 100%;
			height: 130rpx;
			margin: 0;
			padding: 0;
			z-index: 3;

			.sharebuttom_img {
				width: 100%;
				height: 130rpx;
			}
		}

		.share {
			position: absolute;
			right: 8rpx;
			top: 155rpx;
			animation-iteration-count: 1;
			z-index: 4;

			.share_img {
				width: 160rpx;
				height: 125rpx;
			}
		}

		.coupons {
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -260rpx;
			margin-top: -135rpx;

			.coupons_box {
				position: relative;
				left: 0;
				top: 0;

				.coupons_bg {
					width: 520rpx;
					height: 270rpx;
				}

				.coupons_btn {
					width: 180rpx;
					height: 44rpx;
					background: #F8F2E2;
					color: #EB2534;
					position: absolute;
					left: 50%;
					margin-left: -90rpx;
					bottom: 14rpx;
					font-size: 22rpx;
					font-weight: bold;
					text-align: center;
					line-height: 44rpx;
					border-radius: 5rpx;
				}
			}

		}

		.sharepyq {
			position: absolute;
			right: 100rpx;
			top: 150rpx;
			width: 390rpx;
			height: 258rpx;
		}
	}

	.lv_bg_box {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 1000rpx;
		z-index: 1;

		.lv_bg_img {
			width: 100%;
			height: 1059rpx;
		}
	}

	.head_title {
		position: relative;
		display: flex;
		left: 0;
		top: 15rpx;
		width: 100%;
		height: 50rpx;
		align-items: center;
		justify-content: center;
		z-index: 2;

		.head_title_left {
			position: absolute;
			left: 20rpx;
			top: 0;
			width: 20rpx;
			height: 20rpx;
		}

		.head_title_center {
			display: flex;
			align-items: center;
			justify-content: center;

		}
	}

	.rank_head {
		width: 100%;
		height: 100rpx;
		position: relative;
		left: 0;
		top: 30rpx;
		z-index: 2;
		display: flex;

		.rank_head_left {
			width: 60rpx;
			height: 60rpx;
			border-radius: 30rpx;
			margin-left: 60rpx;
		}

		.rank_head_right {
			margin-left: 12rpx;
			padding-top: 5rpx;
			height: 128rpx;
			width: 400rpx;
		}
	}

	.rank_card {
		width: 612rpx;
		height: 130rpx;
		// background: pink;
		position: relative;
		left: 0rpx;
		top: -20rpx;
		margin: auto;
		z-index: 2;

		.rank_cardimg {
			width: 612rpx;
			height: 100rpx;
			position: absolute;
			left: 0;
			bottom: -2rpx;
		}

		.rank_card_box {
			.rank_card_top {
				padding-top: 45rpx;
				padding-left: 30rpx;
				position: absolute;
				color: #FFFFFF;
				z-index: 3;
			}

			.rank_card_bottom {
				position: absolute;
				padding-left: 30rpx;
				padding-top: 85rpx;
				display: flex;
				z-index: 3;
				color: #FFFFFF;
				font-size: 16rpx;
			}
		}
	}

	.match_img {
		width: 16rpx;
		height: 16rpx;
	}
</style>
