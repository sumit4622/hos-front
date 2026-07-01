import { Button } from '../components/button';
import { DownloadOutlined } from '@ant-design/icons';

export default function Dashboard() {

    function something() {

    }
    return (
        <div style={{ display: 'flex', gap: '12px' }}>
            {/* Native Antd props (type, loading, icon) work seamlessly */}
            <Button
                type="primary"
                loading={false}
                icon={<DownloadOutlined />}
                onClick={something}
            >
                Download Report
            </Button>

            {/* Your custom extended props work seamlessly too! */}
            <Button
                type="default"
                isPremiumFeature={true}
                analyticsId="upgrade_btn_dashboard"
            >
                Upgrade Plan
            </Button>
        </div>
    );
}